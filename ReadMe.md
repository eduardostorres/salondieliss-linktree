# SalonDiEliss Linktree

Sitio web tipo **Linktree** para **SalonDiEliss | By Elisa Torres**, creado como una landing page ligera, responsiva y enfocada en convertir visitas en citas por WhatsApp.

## Vista general

El proyecto presenta una tarjeta central con identidad visual premium, enlaces a redes sociales, botón principal de agenda por WhatsApp y mapa de ubicación. Está pensado para compartirse en biografías de redes sociales, campañas digitales o códigos QR.

## Características

- Diseño responsivo para móvil, tablet y escritorio.
- Interfaz visual con estilo **glassmorphism** y paleta **Nude Rosé**.
- Botón CTA principal para agendar cita por WhatsApp.
- Enlaces rápidos a Instagram, Facebook, TikTok, X/Twitter y Spotify.
- Mapa embebido para mostrar la ubicación del salón.
- Animaciones de entrada con `IntersectionObserver`.
- Efecto táctil en el botón principal.
- Configuración SEO básica y metadatos Open Graph.
- Uso de fuentes de Google Fonts e iconos de Font Awesome.

## Tecnologías utilizadas

- **HTML5** para la estructura semántica.
- **CSS3** para estilos personalizados, variables de diseño y animaciones.
- **JavaScript vanilla** para interacciones ligeras.
- **Tailwind CSS CDN** para utilidades rápidas de layout y color.
- **Font Awesome CDN** para iconografía de redes sociales.
- **Google Fonts** para la tipografía de marca y texto.

## Estructura del proyecto

```text
.
├── index.html
├── assets
│   ├── css
│   │   └── style.css
│   ├── images
│   │   └── LogoSalon.webp
│   └── js
│       └── app.js
└── ReadMe.md
```

## Cómo ejecutar el sitio localmente

Este proyecto es estático, por lo que no necesita instalación de dependencias ni proceso de compilación.

### Opción 1: abrir directamente

Abre el archivo `index.html` en tu navegador.

### Opción 2: usar un servidor local

Desde la raíz del proyecto ejecuta:

```bash
python3 -m http.server 8000
```

Luego visita:

```text
http://localhost:8000
```

## Personalización rápida

### Cambiar enlaces sociales

Edita los enlaces dentro del bloque de redes sociales en `index.html`:

- Instagram
- Facebook
- TikTok
- X/Twitter
- Spotify

### Cambiar el WhatsApp de agenda

Modifica el enlace del botón principal en `index.html`:

```html
<a href="https://wa.me/525558186483" class="cta-button">
```

Usa el formato internacional sin espacios, signos `+`, guiones o paréntesis.

### Cambiar colores de marca

La paleta principal se controla desde las variables CSS en `assets/css/style.css`:

```css
:root{
    --color-primary:#D6AAA0;
    --color-primary-dark:#C99487;
    --color-text:#5B4A45;
    --color-text-soft:#9D8076;
}
```

### Cambiar el favicon o logotipo

Reemplaza el archivo:

```text
assets/images/LogoSalon.webp
```

Si usas otro nombre o formato, actualiza también la referencia del favicon en `index.html`.

## SEO y redes sociales

El sitio incluye metadatos básicos para buscadores y Open Graph. Antes de publicar, revisa en `index.html`:

- `title`
- `meta description`
- `meta keywords`
- `og:title`
- `og:description`
- `og:image`

> Nota: actualmente `og:image` apunta a `./assets/images/og-image.jpg`. Si se requiere una imagen para compartir en redes, agrega ese archivo o actualiza la ruta al recurso correcto.

## Despliegue

Al ser un sitio estático, puede publicarse fácilmente en:

- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages
- Cualquier hosting estático tradicional

Para producción, sube el contenido del repositorio y asegúrate de que `index.html` quede como archivo de entrada principal.

## Mantenimiento recomendado

- Verificar periódicamente que los enlaces sociales sigan activos.
- Actualizar el enlace de WhatsApp si cambia el número de contacto.
- Optimizar imágenes antes de subirlas al repositorio.
- Revisar metadatos Open Graph cuando se cambie la imagen o texto de campaña.
- Evitar lógica innecesaria para mantener el sitio rápido y fácil de publicar.

## Autoría

Proyecto web para **SalonDiEliss | By Elisa Torres**.
