import { ArrowRightIcon } from '@/components/sidetoc/icon';
import React from 'react'

type Locale = 'es' | 'en'

export default function ProjectsPage({ params }: { params: { locale: string } }) {
  const lang = (params.locale as Locale) || 'es'

  const projects: Record<Locale, Array<{ title: string; description: string; href: string }>> = {
    es: [
      { title: 'BysMax Electrónica', description: 'Un blog sobre electrónica y sistemas embebidos.', href: `https://electronica.bysmax.com/${lang}` },
      { title: 'Portfolio', description: 'Mi sitio web personal y portafolio profesional.', href: 'https://emmanuelh.dev' },
      { title: 'Aplicaciones GPS', description: 'Herramientas avanzadas para profesionales de sistemas de geolocalización.', href: `https://electronica.bysmax.com/${lang}/gps/` },
      { title: 'Menús Digitales', description: 'Plataforma para crear menús digitales autogestionables para hostelería.', href: `https://menus.bysmax.com/menus` },
      { title: 'Moteles', description: 'Sistema integral de administración y control para moteles.', href: `https://menus.bysmax.com/moteles` }
    ],
    en: [
      { title: 'BysMax Electronics', description: 'A blog about electronics and embedded systems.', href: `https://electronica.bysmax.com/en` },
      { title: 'Portfolio', description: 'My personal portfolio and professional showcase.', href: 'https://emmanuelh.dev' },
      { title: 'GPS Applications', description: 'Advanced tools for GPS and geolocation professionals.', href: `https://electronica.bysmax.com/en/gps/` },
      { title: 'Digital Menus', description: 'Easily create self-managed digital menus for your business.', href: `https://menus.bysmax.com/menus` },
      { title: 'Motels', description: 'Comprehensive management and control system for motels.', href: `https://menus.bysmax.com/moteles` }
    ]
  }

  const currentProjects = projects[lang] || projects['es']

  return (
    /* Eliminadas las clases de transición para un cambio instantáneo */
    <main className="min-h-screen px-6 py-20 ">
      <div className="max-w-2xl mx-auto">
        
        <h1 className="text-xs font-bold tracking-[0.3em] uppercase mb-16 border-b border-black dark:border-neutral-800 pb-3">
          {lang === 'es' ? 'Selección de Proyectos' : 'Project Selection'}
        </h1>
        
        <div className="space-y-14">
          {currentProjects.map((project, index) => (
            <div key={index} className="group">
              <h2 className="text-xl font-light mb-2">
                <a 
                  href={project.href} 
                  className="hover:opacity-60 flex items-center gap-2"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <ArrowRightIcon/>{project.title}
                </a>
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed max-w-sm font-light font-bold">
                {project.description}
              </p>
            </div>
          ))}
        </div>

        <footer className="mt-24 pt-8 border-t border-neutral-100 dark:border-neutral-900 text-[10px] text-neutral-400 uppercase tracking-widest">
          © {new Date().getFullYear()} BysMax — All Rights Reserved.
        </footer>
      </div>
    </main>
  )
}