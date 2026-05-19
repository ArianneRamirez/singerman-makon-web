/*
  Interacciones del sitio.
  Mantener este archivo libre de contenido editorial: textos y datos viven en data/site-data.js.
*/
const $ = (selector, ctx = document) => ctx.querySelector(selector);
const $$ = (selector, ctx = document) => [...ctx.querySelectorAll(selector)];
const { services = [], projects = [] } = window.SITE_DATA || {};
const CONFIG = window.APP_CONFIG || {};
const LABELS = {
  service: 'Servicio',
  seeMore: 'Ver más',
  seeProject: 'Ver proyecto →',
  allAreas: 'Todas las áreas',
  noProjects: 'No se encontraron proyectos con esos filtros.',
  stepOrigin: '¿De dónde viene?',
  privateCompany: 'Empresa privada',
  publicAgency: 'Organismo público',
  other: 'Otro',
  stepNeed: '¿Qué necesita su empresa?',
  recommended: 'Servicio recomendado',
  restart: 'Empezar de nuevo',
  servicePath: 'pages/servicios.html',
  projectPreviewBase: 'pages/proyectos/',
  projectGridBase: 'proyectos/',
  formReady: 'Formulario listo. Para activarlo, reemplazá FORM_ID_REEMPLAZAR en el atributo action por tu endpoint de Formspree.',
  sending: 'Enviando...',
  sent: 'Gracias. Tu consulta fue enviada correctamente.',
  sendError: 'Hubo un problema al enviar el formulario. Revisá la configuración de Formspree o intentá nuevamente.',
  submitText: 'Enviar consulta',
  ...CONFIG.labels,
};
const ASSET_BASE = CONFIG.assetBase || './assets/';
function assetUrl(path = '') {
  if (/^https?:\/\//.test(path)) return path;
  const clean = String(path).replace(/^\.\//, '').replace(/^\.\.\/assets\//, '').replace(/^assets\//, '');
  return ASSET_BASE + clean;
}


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
          <img src="${assetUrl(service.image)}" alt="${service.title}" loading="lazy">
        </div>
        <div class="service-content">
          <p class="service-number">${LABELS.service} ${String(index + 1).padStart(2, '0')}</p>
          <h3>${service.title}</h3>
          <p>${service.shortText || service.text}</p>
          <a href="${LABELS.servicePath}#${service.slug}">${LABELS.seeMore}</a>
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
      <h3>${LABELS.stepOrigin}</h3>
      <button type="button">${LABELS.privateCompany}</button>
      <button type="button">${LABELS.publicAgency}</button>
      <button type="button">${LABELS.other}</button>`;
  };

  const renderStepTwo = () => {
    wrapper.innerHTML = `
      <div class="steps"><span>1</span><b>2</b></div>
      <h3>${LABELS.stepNeed}</h3>
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
      <p class="eyebrow">${LABELS.recommended}</p>
      <h3>${service.title}</h3>
      <p>${service.shortText || service.text}</p>
      <a class="btn" href="${LABELS.servicePath}#${service.slug}">${LABELS.seeMore}</a>
      <button class="ghost" type="button" data-restart-wizard>${LABELS.restart}</button>`;
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
    <a class="project-card" href="${LABELS.projectPreviewBase}${project.slug}.html">
      <span>${project.category}</span>
      <h3>${project.title}</h3>
      <p>${project.country}</p>
      <small>${LABELS.seeProject}</small>
    </a>`).join('');
}

function renderPortfolio() {
  const grid = $('[data-projects-grid]');
  if (!grid) return;

  const search = $('[data-project-search]');
  const category = $('[data-project-category]');
  const categories = [...new Set(projects.map((project) => project.category))];

  category.innerHTML = `<option value="">${LABELS.allAreas}</option>` + categories.map((item) => `<option>${item}</option>`).join('');

  const paint = () => {
    const term = search.value.toLowerCase();
    const cat = category.value;
    const filtered = projects.filter((project) => {
      const matchesCategory = !cat || project.category === cat;
      const matchesSearch = project.title.toLowerCase().includes(term) || project.country.toLowerCase().includes(term);
      return matchesCategory && matchesSearch;
    });

    grid.innerHTML = filtered.map((project) => `
      <a class="project-card" href="${LABELS.projectGridBase}${project.slug}.html">
        <span>${project.category}</span>
        <h3>${project.title}</h3>
        <p>${project.country}</p>
        <small>${LABELS.seeProject}</small>
      </a>`).join('') || `<p>${LABELS.noProjects}</p>`;
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
      note.textContent = LABELS.formReady;
      note.classList.add('is-success');
      return;
    }

    submit.disabled = true;
    submit.textContent = LABELS.sending;

    try {
      const response = await fetch(action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });

      if (!response.ok) throw new Error('No se pudo enviar el formulario.');

      form.reset();
      note.textContent = LABELS.sent;
      note.classList.add('is-success');
    } catch (error) {
      note.textContent = LABELS.sendError;
      note.classList.remove('is-success');
    } finally {
      submit.disabled = false;
      submit.textContent = LABELS.submitText;
    }
  });
}
// Funcionamiento del carrusel de logos
const logosTrack = document.getElementById("logosTrack");

if (logosTrack) {
  const totalLogos = 28;

  // Detecta si la página está en la raíz o dentro de /en, /pt, /zh, etc.
  const mainScript = document.querySelector('script[src$="assets/js/main.js"]');
  const scriptSrc = mainScript ? mainScript.getAttribute("src") : "assets/js/main.js";
  const assetsBase = scriptSrc.replace(/(^|.*\/)assets\/js\/main\.js$/, "$1assets");

  const logos = Array.from({ length: totalLogos }, (_, i) => {
    const num = i + 1;
    return `
      <div class="logo-item">
        <img src="${assetsBase}/img/carrusel/${num}.png" alt="Client logo ${num}" loading="lazy">
      </div>
    `;
  }).join("");

  // Duplicamos para lograr el efecto infinito
  logosTrack.innerHTML = logos + logos;
}

renderServices();
renderWizard();
renderProjectsPreview();
renderPortfolio();
handleContactForm();
