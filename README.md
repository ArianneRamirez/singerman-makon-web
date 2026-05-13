# Singerman & Makón — sitio estático

Versión estática del sitio S&M para  versionar en GitHub y publicar con GitHub Pages.

## Estructura

```text
index.html
pages/
  servicios.html
  portfolio.html
  quienes-somos.html
  proyectos/
assets/
  css/styles.css
  js/main.js
  img/
    equipo/
    portfolio/
    logo/
data/site-data.js
```

## Cómo editar contenido

- Textos generales de páginas: editar directamente los archivos `.html`.
- Servicios y proyectos listados dinámicamente: editar `data/site-data.js`.
- Estilos visuales: editar `assets/css/styles.css`.
- Interacciones: editar `assets/js/main.js`.

## Imágenes
- Equipo: `assets/img/equipo/`
- Portfolio: `assets/img/portfolio/`
- Logo: `assets/img/logo/`

En páginas individuales de proyectos, la ruta correcta desde `pages/proyectos/` es:

```html
<img src="../../assets/img/portfolio/nombre-del-archivo.jpg" alt="Descripción">
```

## Formulario de contacto con Formspree

El formulario ya está preparado en `index.html`.

Buscá esta línea:

```html
<form class="contact-form" data-contact-form action="https://formspree.io/f/FORM_ID_REEMPLAZAR" method="POST">
```

Reemplazá `FORM_ID_REEMPLAZAR` por tu ID real de Formspree.

Ejemplo:

```html
<form class="contact-form" data-contact-form action="https://formspree.io/f/xleqabcd" method="POST">
```

Pasos en Formspree:

1. Crear cuenta en https://formspree.io/
2. Crear un nuevo form.
3. Copiar el endpoint que empieza con `https://formspree.io/f/`.
4. Pegar ese endpoint en el atributo `action` del formulario.
5. Subir cambios a GitHub.
6. Hacer una prueba desde la web publicada.

Prueba: Usuario: arlenemak12@gmail.com - Contraseña: qYLx8fUmQuj63*U
Luego reemplazar esto por el endpoint correspondiente a la cuenta S&M

## SEO incorporado

Se agregaron mejoras básicas:

- `<title>` único por página.
- `<meta name="description">` por página.
- etiquetas Open Graph básicas.
- `robots.txt`.
- `sitemap.xml` editable.
- textos alternativos en imágenes principales.
- estructura semántica con `header`, `main`, `section`, `article`, `footer`.

Antes de publicar definitivamente, editá `sitemap.xml` y reemplazá `https://TU-USUARIO.github.io/TU-REPO/` por la URL real del sitio.

## Publicación recomendada

Para GitHub Pages:

1. Subir todos los archivos al repo.
2. Ir a `Settings > Pages`.
3. Elegir `Deploy from a branch`.
4. Branch: `main`.
5. Folder: `/root`.


## Estructura multilenguaje

Se agregaron versiones estáticas por idioma:

- `/index.html` y `/pages/` → español
- `/en/` → inglés
- `/pt/` → portugués
- `/zh/` → chino simplificado

El encabezado incluye selector de idioma: `ES | EN | PT | 中文`.
Las traduccines zh corresponden al Chino simplificado estándar, usado en China continental y Singapur. Variante más usada del mundo (~950 millones de hablantes nativos).

### SEO internacional

Cada página incluye etiquetas `hreflang` para indicar versiones alternativas por idioma. El archivo `sitemap.xml` incluye todas las páginas, pero antes de publicar conviene reemplazar:

```text
https://TU-USUARIO.github.io/TU-REPO
```

por la URL real de GitHub Pages o el dominio definitivo.

### Edición de textos traducidos

Los servicios y proyectos que se cargan dinámicamente usan:

- `data/site-data.js` para español
- `data/site-data-en.js` para inglés
- `data/site-data-pt.js` para portugués
- `data/site-data-zh.js` para chino

Las páginas estáticas de cada idioma están dentro de su carpeta correspondiente.


## Versión multilenguaje corregida

Esta versión completa las traducciones pendientes de:
- Portfolio y datos de proyectos en `data/site-data-en.js`, `data/site-data-pt.js` y `data/site-data-zh.js`.
- Páginas individuales de proyectos en `/en/proyectos/`, `/pt/proyectos/` y `/zh/proyectos/`.
- Textos de integrantes y diferencial institucional en `quienes-somos.html` de cada idioma.

El selector de idioma se mantiene en el encabezado y las etiquetas SEO/hreflang siguen activas.
