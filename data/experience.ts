export interface ExperienceProps {
    title: string
    description?: string[] | null | undefined
    job: string
    link: string
    date: string
    skills: string[]
  }
  
  export const experience: ExperienceProps[] = [
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
  ]