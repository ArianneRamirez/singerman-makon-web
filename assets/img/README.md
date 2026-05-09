# Espacio para imágenes locales

La estructura ya está preparada para reemplazar las imágenes externas de WordPress por archivos propios.

Carpetas sugeridas:

- `logo/`: logos institucionales y versión 20 años.
- `home/`: imágenes principales del home.
- `servicios/`: una imagen por cada servicio.
- `portfolio/`: imágenes de proyectos.
- `clientes/`: logos de clientes e instituciones.
- `equipo/`: fotos del equipo.

Para reemplazar una imagen:

1. Copiá el archivo dentro de la carpeta correspondiente.
2. Editá la ruta en `data/site-data.js` o directamente en el HTML.
3. Ejemplo:

```js
image: '../assets/img/servicios/planificacion.jpg'
```

En esta versión dejé las imágenes apuntando al sitio actual para que se vea completa sin que tengas que descargar los archivos todavía.
