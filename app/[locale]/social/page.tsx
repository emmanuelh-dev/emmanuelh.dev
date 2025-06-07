import { Metadata } from 'next'
import { createTranslation } from '../i18n/server'
import { LocaleTypes } from '../i18n/settings'
import { socialLinksData, SocialLink } from '@/data/socialLinksData'
import { maintitle } from '@/data/localeMetadata'
import siteMetadata from '@/data/siteMetadata'
import SocialLinkCard from './SocialLinkCard'

interface SocialPageProps {
  params: { locale: LocaleTypes }
}

export async function generateMetadata({ params: { locale } }: SocialPageProps): Promise<Metadata> {
  const { t } = await createTranslation(locale, 'social')

  return {
    title: `${t('title')} - ${maintitle[locale]}`,
    description: t('description'),
    openGraph: {
      title: `${t('title')} - ${maintitle[locale]}`,
      description: t('description'),
      url: `${siteMetadata.siteUrl}/${locale}/social`,
      siteName: maintitle[locale],
      type: 'website',
    },
  }
}

export default async function SocialPage({ params: { locale } }: SocialPageProps) {
  const { t } = await createTranslation(locale, 'social')

  const socialLinks = socialLinksData.filter((link) => link.type === 'social')
  const projectLinks = socialLinksData.filter((link) => link.type === 'project')
  const shortcutLinks = socialLinksData.filter((link) => link.type === 'shortcut')
  const sponsoredLinks = socialLinksData.filter((link) => link.type === 'sponsored')
  return (
    <div className="mx-auto max-w-lg">
      <div className="mb-12 text-center">
        <div className="mb-6">
          <img
            src="/static/images/avatar.png"
            alt="Emmanuel Diaz Leal Hernandez"
            className="mx-auto h-16 w-16 rounded-lg border border-gray-200 object-cover dark:border-gray-800"
          />
        </div>
        <h1 className="mb-2 text-xl font-semibold text-gray-900 dark:text-gray-100">
          All My Links
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400">Find me across the web</p>
      </div>

      {shortcutLinks.length > 0 && (
        <section className="mb-8">
          <h2 className="mb-3 text-sm font-medium text-gray-900 dark:text-gray-100">Quick Links</h2>
          <div className="space-y-2">
            {shortcutLinks.map((link, index) => (
              <SocialLinkCard key={index} link={link} locale={locale} />
            ))}
          </div>
        </section>
      )}

      {socialLinks.length > 0 && (
        <section className="mb-8">
          <h2 className="mb-3 text-sm font-medium text-gray-900 dark:text-gray-100">
            Social Media
          </h2>
          <div className="space-y-2">
            {socialLinks.map((link, index) => (
              <SocialLinkCard key={index} link={link} locale={locale} />
            ))}
          </div>
        </section>
      )}

      {sponsoredLinks.length > 0 && (
        <section className="mb-8">
          <h2 className="mb-3 text-sm font-medium text-gray-900 dark:text-gray-100">
            Recommendations
          </h2>
          <div className="space-y-2">
            {sponsoredLinks.map((link, index) => (
              <SocialLinkCard key={index} link={link} locale={locale} />
            ))}
          </div>
        </section>
      )}

      <div className="mt-8 border-t border-gray-200 pt-8 text-center dark:border-gray-800">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2025 Emmanuel Diaz Leal Hernandez
        </p>
      </div>
    </div>
  )
}
