# EmmanuelHDev - Portfolio & Blog

Este repositorio contiene el código fuente de mi sitio web personal, [emmanuelh.dev](https://emmanuelh.dev), construido con Next.js, Tailwind CSS e i18n para soporte multilingüe (Español e Inglés).

El proyecto se basa en el excelente [Tailwind Nextjs Starter Blog](https://github.com/timlrx/tailwind-nextjs-starter-blog) de @timlrx y su adaptación i18n.

Si encuentras útil este proyecto, por favor dale una ⭐ para mostrar tu apoyo.

## Características

*   **Framework:** Next.js 14 (App Router)
*   **Estilos:** Tailwind CSS
*   **Contenido:** MDX v2
*   **Internacionalización (i18n):** `i18next`, `react-i18next`
*   **Comentarios:** Giscus
*   **Búsqueda:** Kbar
*   **SEO:** Metadatos generados automáticamente, sitemap, robots.txt
*   **Despliegue:** Vercel

## Personalizaciones y Características Adicionales

(Esta sección puede ser actualizada para reflejar las características específicas implementadas en este proyecto)

*   Soporte para Español como idioma principal.
*   Configuración de metadatos y SEO adaptada.
*   Personalización de estilos y componentes.
*   Integración con servicios específicos (si aplica).

## Configuración i18n

La configuración principal para la internacionalización se encuentra en `app/[locale]/i18n`:

```
app
  │
 [locale]
    │
    ├── i18n
    │     │
    │     ├──locales
    │     │     │
    │     │     ├── en
    │     │     │   ├── about.json
    │     │     │   │
    │     │     │   ├── home.json
    │     │     │   │
    │     │     │   └── ...
    │     │     └── es  // Directorio para español
    │     │         ├── about.json
    │     │         │
    │     │         ├── home.json
    │     │         │
    │     │         └── ...
    │     │
    │     │
    │     ├── client.ts
    │     ├── locales.js // Define los idiomas soportados
    │     ├── server.ts
    │     └── settings.ts // Configuración de i18next
    │
    └── ...
```

*   **Archivos JSON:** Contienen las traducciones para cada idioma, organizadas por página o sección (namespace). Es crucial mantener la misma estructura y claves en los archivos correspondientes para cada idioma.
*   **`locales.js`:** Define los idiomas disponibles (`es`, `en`) y el idioma por defecto (`es`).
*   **`settings.ts`:** Configuración central de `i18next`, incluyendo los idiomas soportados y el namespace por defecto.
*   **`client.ts` y `server.ts`:** Exportan hooks (`useTranslation`) y funciones (`createTranslation`) para usar las traducciones en componentes del lado del cliente y del servidor, respectivamente.
*   **`middleware.ts`:** Gestiona el enrutamiento basado en el idioma detectado en la URL, redirigiendo si es necesario y asegurando que la ruta incluya el locale correcto.

## Despliegue

El sitio está desplegado en [Vercel](https://vercel.com).

## Licencia

[MIT](https://github.com/timlrx/tailwind-nextjs-starter-blog/blob/master/LICENSE)

## Créditos

*   [Timothy Lin (timlrx)](https://github.com/timlrx) por el template original [Tailwind Nextjs Starter Blog](https://github.com/timlrx/tailwind-nextjs-starter-blog).
*   La comunidad de [i18next](https://www.i18next.com/) por las librerías de internacionalización.
