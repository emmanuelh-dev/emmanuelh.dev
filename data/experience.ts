export interface Experience {
  title: string
  description?: string[] | null | undefined
  job: string
  link: string
  date: string
  skills: string[]
}

export interface ExperienceProps{
    [locale: string]: Experience[]
  }
  
  export const experience: ExperienceProps = {
    en: [
      {
        title: 'Gonzher Logistic and transport',
        description: [
          'Maintained and managed warehouse systems.',
          'Developed sales and transport modules.',
          'Integrated Google Maps API for enhanced delivery tracking.',
          'Utilized FastAPI for backend development.',
          'Employed Vue and Vuetify for frontend development.',
        ],
        link: 'https://www.gonzher.com/',
        job: 'Full Stack Developer',
        date: 'Oct 2023 - Present',
        skills: ['NodeJS', 'JavaScript', 'Git', 'Php', 'Laravel', 'UX'],
      },
      {
        title: 'ConnectIT',
        description: [
          'Maintained and managed warehouse systems.',
          'Developed sales and transport modules.',
          'Integrated Google Maps API for enhanced delivery tracking.',
          'Utilized FastAPI for backend development.',
          'Employed Vue and Vuetify for frontend development.',
        ],
        job: 'Developer',
        link: 'https://www.connectit.com.mx/',
        date: 'May 2023 - Sep 2023',
        skills: ['Nodejs', 'JavaScript', 'Vue', 'Vuetify', 'Git', 'UX', 'FastAPI', 'Python'],
      },
      {
        title: 'BysMax',
        description: [
          'Developed and maintained the companys website and blog.',
          'Authored content and implemented SEO strategies to increase traffic from Google, Bing, and YouTube.',
          'Built the core blog using Next.js.',
          'Added serverless functions to enhance internal functionality.',
          'Integrated features such as Google AdSense and Markdown support.',
        ],
        job: 'FrontEnd Developer',
        link: 'https://www.bysmax.com/',
        date: 'Jan 2021 - June 2023',
        skills: ['React', 'JavaScript', 'NextJS', 'Nodejs', 'TailwindCSS'],
      },
    ],
    es: [
      {
        title: 'Gonzher Logistic and transport',
        description: [
          'Mantenimiento y gestión de sistemas de almacén (WMS).',
          'Desarrollo de módulos de ventas y transporte.',
          'Integración de la API de Google Maps para optimización del rastreo de entregas.',
          'Implementación de FastAPI para el desarrollo del backend.',
          'Uso de Vue y Vuetify para el desarrollo del frontend.',
        ],
        link: 'https://www.gonzher.com/',
        job: 'Desarrollador Full Stack',
        date: 'Oct 2023 - Presente',
        skills: ['NodeJS', 'JavaScript', 'Git', 'Php', 'Laravel', 'UX'],
      },
      {
        title: 'ConnectIT',
        description: [
          'Mantenimiento y gestión de sistemas de almacén.',
          'Desarrollo de módulos de ventas y transporte.',
          'Integración de la API de Google Maps para seguimiento avanzado de envíos.',
          'Utilización de FastAPI para lógica de backend.',
          'Uso de Vue y Vuetify para la creación de interfaces de usuario.',
        ],
        job: 'Desarrollador',
        link: 'https://www.connectit.com.mx/',
        date: 'May 2023 - Sep 2023',
        skills: ['Nodejs', 'JavaScript', 'Vue', 'Vuetify', 'Git', 'UX', 'FastAPI', 'Python'],
      },
      {
        title: 'BysMax',
        description: [
          'Desarrollo y mantenimiento del sitio web corporativo y blog.',
          'Redacción de contenido e implementación de estrategias SEO para incrementar tráfico desde Google, Bing y YouTube.',
          'Construcción del núcleo del blog utilizando Next.js.',
          'Implementación de funciones serverless para mejorar la funcionalidad interna.',
          'Integración de Google AdSense y soporte para Markdown.',
        ],
        job: 'Desarrollador FrontEnd',
        link: 'https://www.bysmax.com/',
        date: 'Ene 2021 - Jun 2023',
        skills: ['React', 'JavaScript', 'NextJS', 'Nodejs', 'TailwindCSS'],
      },
    ],
  };