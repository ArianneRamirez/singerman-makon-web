/* Código principal del sitio. Mantiene interacciones separadas del HTML. */
const $ = (selector, ctx = document) => ctx.querySelector(selector);
const $$ = (selector, ctx = document) => [...ctx.querySelectorAll(selector)];
const { services, projects } = window.SITE_DATA;

// Header transparente que gana blur al hacer scroll.
const header = $('[data-header]');
window.addEventListener('scroll', () => header?.classList.toggle('is-scrolled', window.scrollY > 20));
$('[data-nav-toggle]')?.addEventListener('click', () => $('[data-nav]')?.classList.toggle('is-open'));

function renderServices() {
  const wrapper = $('[data-service-panels]');
  if (!wrapper) return;
  wrapper.innerHTML = services.map((service, index) => `
    <article class="service-panel ${index === 0 ? 'is-active' : ''}" tabindex="0">
      <img src="${service.image}" alt="${service.title}">
      <div class="service-content"><p class="service-number">0${index + 1}</p><h3>${service.title}</h3><p>${service.shortText || service.text}</p><a href="pages/servicios.html#${service.slug}">Ver más</a></div>
    </article>`).join('');
  $$('.service-panel', wrapper).forEach(panel => {
    panel.addEventListener('click', () => {
      $$('.service-panel', wrapper).forEach(item => item.classList.remove('is-active'));
      panel.classList.add('is-active');
    });
  });
}

function renderWizard() {
  const wrapper = $('[data-wizard]');
  if (!wrapper) return;
  let origin = '';
  const needs = services.map(s => s.title);
  const renderStepOne = () => wrapper.innerHTML = `<div class="steps"><b>1</b><span>2</span></div><h3>¿De dónde viene?</h3><button>Empresa privada</button><button>Organismo público</button><button>Otro</button>`;
  const renderStepTwo = () => wrapper.innerHTML = `<div class="steps"><span>1</span><b>2</b></div><h3>¿Qué necesita su empresa?</h3>${needs.map((n, i)=>`<button data-need="${i}">${n}</button>`).join('')}`;
  renderStepOne();
  wrapper.addEventListener('click', e => {
    if (e.target.tagName !== 'BUTTON') return;
    if (!origin) { origin = e.target.textContent; renderStepTwo(); return; }
    const service = services[Number(e.target.dataset.need || 0)];
    wrapper.innerHTML = `<p class="eyebrow">Servicio recomendado</p><h3>${service.title}</h3><p>${service.shortText || service.text}</p><a class="btn" href="pages/servicios.html#${service.slug}">Ver servicio</a><button class="ghost" onclick="location.reload()">Empezar de nuevo</button>`;
  });
}

function renderProjectsPreview() {
  const wrapper = $('[data-projects-preview]');
  if (!wrapper) return;
  wrapper.innerHTML = projects.slice(0, 6).map(p => `<a class="project-card" href="pages/proyectos/${p.slug}.html"><span>${p.category}</span><h3>${p.title}</h3><p>${p.country}</p><small>Ver proyecto →</small></a>`).join('');
}

function renderPortfolio() {
  const grid = $('[data-projects-grid]');
  if (!grid) return;
  const search = $('[data-project-search]');
  const category = $('[data-project-category]');
  category.innerHTML = '<option value="">Todas las áreas</option>' + [...new Set(projects.map(p => p.category))].map(c => `<option>${c}</option>`).join('');
  const paint = () => {
    const term = search.value.toLowerCase();
    const cat = category.value;
    grid.innerHTML = projects.filter(p => (!cat || p.category === cat) && p.title.toLowerCase().includes(term)).map(p => `<a class="project-card" href="proyectos/${p.slug}.html"><span>${p.category}</span><h3>${p.title}</h3><p>${p.country}</p><small>Ver proyecto →</small></a>`).join('');
  };
  search.addEventListener('input', paint); category.addEventListener('change', paint); paint();
}

renderServices(); renderWizard(); renderProjectsPreview(); renderPortfolio();

// Formulario de contacto estático: evita recargar la página y deja listo el punto de integración.
$('[data-contact-form]')?.addEventListener('submit', event => {
  event.preventDefault();
  const note = $('[data-form-note]', event.currentTarget);
  if (note) {
    note.textContent = 'Gracias. En la versión estática, este envío queda simulado. Para producción, conectar con Formspree, Netlify Forms, EmailJS o un backend propio.';
    note.classList.add('is-success');
  }
});
