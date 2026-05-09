# Sitio estático Singerman & Makón

Versión estática limpia para editar en VS Code y versionar en GitHub.

## Estructura

- `index.html`: página principal.
- `pages/`: páginas internas.
- `assets/css/styles.css`: estilos globales.
- `assets/js/main.js`: interacciones del menú, servicios, recomendador y portfolio.
- `data/site-data.js`: textos, servicios y proyectos editables.

## Cómo usar

1. Abrir la carpeta en VS Code.
2. Instalar la extensión **Live Server**.
3. Click derecho en `index.html` → **Open with Live Server**.
4. Para subir a GitHub: crear repositorio y subir todos los archivos.

## Nota

Las imágenes están referenciadas desde el WordPress actual mediante URL remota. Si luego querés que el sitio sea 100% independiente, descargá esas imágenes a `assets/img/` y reemplazá las URLs en `data/site-data.js` y en los HTML.


## Páginas individuales de proyectos

La carpeta `pages/proyectos/` contiene una página HTML por cada proyecto listado en Portfolio.
Cada página incluye un bloque reservado para la imagen principal del proyecto.

Para agregar una imagen:
1. Guardar el archivo en `assets/img/portfolio/`.
2. Usar el nombre sugerido en la ficha de cada página, por ejemplo: `estrategia-para-el-desarrollo-de-la-oferta-turistica-boliviana.jpg`.
3. Reemplazar el bloque `.project-hero-image` por:

```html
<img class="project-main-img" src="../../assets/img/portfolio/nombre-del-proyecto.jpg" alt="Nombre del proyecto">
```
