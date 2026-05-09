/*
  Interacciones del sitio.
  Mantener este archivo libre de contenido editorial: textos y datos viven en data/site-data.js.
*/
const $ = (selector, ctx = document) => ctx.querySelector(selector);
const $$ = (selector, ctx = document) => [...ctx.querySelectorAll(selector)];
const { services = [], projects = [] } = window.SITE_DATA || {};

// Header transparente que gana blur al hacer scroll.
const header = $('[data-header]');
const updateHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 20);
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

// Menú mobile.
const navToggle = $('[data-nav-toggle]');
const nav = $('[data-nav]');
navToggle?.addEventListener('click', () => {
  const isOpen = nav?.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(Boolean(isOpen)));
});

// Cierra el menú mobile al navegar.
$$('[data-nav] a').forEach((link) => {
  link.addEventListener('click', () => nav?.classList.remove('is-open'));
});

function renderServices() {
  const wrapper = $('[data-service-panels]');
  if (!wrapper) return;

  wrapper.innerHTML = services.map((service, index) => `
    <article class="service-panel ${index === 0 ? 'is-active' : ''}" tabindex="0">
      <div class="service-panel-inner">
        <div class="service-panel-media">
          <img src="./assets/${service.image}" alt="${service.title}" loading="lazy">
        </div>
        <div class="service-content">
          <p class="service-number">Servicio ${String(index + 1).padStart(2, '0')}</p>
          <h3>${service.title}</h3>
          <p>${service.shortText || service.text}</p>
          <a href="pages/servicios.html#${service.slug}">Ver más</a>
        </div>
      </div>
    </article>`).join('');

  $$('.service-panel', wrapper).forEach((panel) => {
    panel.addEventListener('click', () => {
      $$('.service-panel', wrapper).forEach((item) => item.classList.remove('is-active'));
      panel.classList.add('is-active');
    });
  });
}

function renderWizard() {
  const wrapper = $('[data-wizard]');
  if (!wrapper) return;

  let origin = '';
  const needs = services.map((service) => service.title);

  const renderStepOne = () => {
    wrapper.innerHTML = `
      <div class="steps"><b>1</b><span>2</span></div>
      <h3>¿De dónde viene?</h3>
      <button type="button">Empresa privada</button>
      <button type="button">Organismo público</button>
      <button type="button">Otro</button>`;
  };

  const renderStepTwo = () => {
    wrapper.innerHTML = `
      <div class="steps"><span>1</span><b>2</b></div>
      <h3>¿Qué necesita su empresa?</h3>
      ${needs.map((need, index) => `<button type="button" data-need="${index}">${need}</button>`).join('')}`;
  };

  renderStepOne();

  wrapper.addEventListener('click', (event) => {
    if (event.target.tagName !== 'BUTTON') return;

    if (!origin) {
      origin = event.target.textContent;
      renderStepTwo();
      return;
    }

    const service = services[Number(event.target.dataset.need || 0)];
    wrapper.innerHTML = `
      <p class="eyebrow">Servicio recomendado</p>
      <h3>${service.title}</h3>
      <p>${service.shortText || service.text}</p>
      <a class="btn" href="pages/servicios.html#${service.slug}">Ver servicio</a>
      <button class="ghost" type="button" data-restart-wizard>Empezar de nuevo</button>`;
  });

  wrapper.addEventListener('click', (event) => {
    if (event.target.matches('[data-restart-wizard]')) {
      origin = '';
      renderStepOne();
    }
  });
}

function renderProjectsPreview() {
  const wrapper = $('[data-projects-preview]');
  if (!wrapper) return;

  wrapper.innerHTML = projects.slice(0, 6).map((project) => `
    <a class="project-card" href="pages/proyectos/${project.slug}.html">
      <span>${project.category}</span>
      <h3>${project.title}</h3>
      <p>${project.country}</p>
      <small>Ver proyecto →</small>
    </a>`).join('');
}

function renderPortfolio() {
  const grid = $('[data-projects-grid]');
  if (!grid) return;

  const search = $('[data-project-search]');
  const category = $('[data-project-category]');
  const categories = [...new Set(projects.map((project) => project.category))];

  category.innerHTML = '<option value="">Todas las áreas</option>' + categories.map((item) => `<option>${item}</option>`).join('');

  const paint = () => {
    const term = search.value.toLowerCase();
    const cat = category.value;
    const filtered = projects.filter((project) => {
      const matchesCategory = !cat || project.category === cat;
      const matchesSearch = project.title.toLowerCase().includes(term) || project.country.toLowerCase().includes(term);
      return matchesCategory && matchesSearch;
    });

    grid.innerHTML = filtered.map((project) => `
      <a class="project-card" href="proyectos/${project.slug}.html">
        <span>${project.category}</span>
        <h3>${project.title}</h3>
        <p>${project.country}</p>
        <small>Ver proyecto →</small>
      </a>`).join('') || '<p>No se encontraron proyectos con esos filtros.</p>';
  };

  search.addEventListener('input', paint);
  category.addEventListener('change', paint);
  paint();
}

async function handleContactForm() {
  const form = $('[data-contact-form]');
  if (!form) return;

  const note = $('[data-form-note]', form);
  const submit = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const action = form.getAttribute('action') || '';
    const isConfigured = action.includes('formspree.io/f/') && !action.includes('REEMPLAZAR');

    if (!isConfigured) {
      note.textContent = 'Formulario listo. Para activarlo, reemplazá FORM_ID_REEMPLAZAR en el atributo action por tu endpoint de Formspree.';
      note.classList.add('is-success');
      return;
    }

    submit.disabled = true;
    submit.textContent = 'Enviando...';

    try {
      const response = await fetch(action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });

      if (!response.ok) throw new Error('No se pudo enviar el formulario.');

      form.reset();
      note.textContent = 'Gracias. Tu consulta fue enviada correctamente.';
      note.classList.add('is-success');
    } catch (error) {
      note.textContent = 'Hubo un problema al enviar el formulario. Revisá la configuración de Formspree o intentá nuevamente.';
      note.classList.remove('is-success');
    } finally {
      submit.disabled = false;
      submit.textContent = 'Enviar consulta';
    }
  });
}

renderServices();
renderWizard();
renderProjectsPreview();
renderPortfolio();
handleContactForm();
