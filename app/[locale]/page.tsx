import { Metadata } from 'next'
import { createTranslation } from './i18n/server'
import { LocaleTypes } from './i18n/settings'
import { socialLinksData } from '@/data/socialLinksData'
import { maintitle } from '@/data/localeMetadata'
import siteMetadata from '@/data/siteMetadata'
import { experience } from '@/data/experience'
import LandingClientPage from './LandingClientPage'

interface PageProps {
  params: { locale: LocaleTypes }
}

export async function generateMetadata({ params: { locale } }: PageProps): Promise<Metadata> {
  const { t } = await createTranslation(locale, 'landing')

  return {
    title: `${maintitle[locale]} | ${t('hero_tagline')}`,
    description: t('hero_description'),
    openGraph: {
      title: `${maintitle[locale]} | ${t('hero_tagline')}`,
      description: t('hero_description'),
      url: `${siteMetadata.siteUrl}/${locale}`,
      siteName: maintitle[locale],
      type: 'website',
    },
  }
}

export default async function Page({ params: { locale } }: PageProps) {
  const { t } = await createTranslation(locale, 'landing')
  
  // Get experience data for this locale
  const experienceData = experience[locale] || experience['es']

  // Get project data (real ones)
  const projects = {
    es: [
      { title: 'BysMax Electrónica', description: 'Un blog sobre electrónica y sistemas embebidos.', href: `https://electronica.bysmax.com/es` },
      { title: 'Portfolio', description: 'Mi sitio web personal y portafolio profesional.', href: 'https://emmanuelh.dev' },
      { title: 'Aplicaciones GPS', description: 'Herramientas avanzadas para profesionales de sistemas de geolocalización.', href: `https://electronica.bysmax.com/es/gps/` },
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

  const currentProjects = projects[locale] || projects['es']

  // Social links
  const socialLinks = socialLinksData.filter(
    (link) => link.type === 'social' && (link.icon === 'github' || link.icon === 'linkedin')
  )

  return (
    <LandingClientPage
      locale={locale}
      t={t}
      experienceData={experienceData}
      projectsData={currentProjects}
      socialLinks={socialLinks}
    />
  )
}
