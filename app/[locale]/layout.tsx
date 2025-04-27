import 'css/tailwind.css'
import 'pliny/search/algolia.css'

import { Space_Grotesk } from 'next/font/google'
import { SearchProvider } from '@/components/search/SearchProvider'
import Header from '@/components/navigation/Header'
import SectionContainer from '@/components/SectionContainer'
import Footer from '@/components/navigation/Footer'
import siteMetadata from '@/data/siteMetadata'
// Remove unused localeMetadata import if not needed elsewhere, or update its usage
// import { maintitle, maindescription } from '@/data/localeMetadata'
import { Metadata } from 'next'
import { dir } from 'i18next'
import { LocaleTypes, locales } from './i18n/settings'
import TwSizeIndicator from '@/components/helper/TwSizeIndicator'
import { ThemeProviders } from './theme-providers'

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

const space_grotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
})

// Helper function to generate title and description based on locale
// This assumes you might want different titles/descriptions per language later
// For now, it uses the main siteMetadata but includes the user's name and keywords
const getLocaleMetadata = (locale: LocaleTypes) => {
  const baseTitle = `${siteMetadata.title} | Emmanuel Diaz Leal Hernandez - Portfolio`
  const baseDescription = `Portfolio personal y blog de Emmanuel Diaz Leal Hernandez (emmanuelhdev, bysmax). ${siteMetadata.description}`
  // You can customize title/description per locale here if needed
  // Example: if (locale === 'en') { ... } else if (locale === 'es') { ... }
  return {
    title: baseTitle,
    description: baseDescription,
  }
}

export async function generateMetadata({ params: { locale } }): Promise<Metadata> {
  const { title: localeTitle, description: localeDescription } = getLocaleMetadata(locale)
  return {
    metadataBase: new URL(siteMetadata.siteUrl),
    title: {
      default: localeTitle,
      template: `%s | ${localeTitle}`, // Use the dynamic title here too
    },
    description: localeDescription,
    keywords: [
      'Emmanuel Diaz Leal Hernandez',
      'emmanuelhdev',
      'bysmax',
      'portfolio',
      'blog',
      'desarrollo web',
      'software engineer',
      ...(siteMetadata.keywords || []),
    ],
    authors: [{ name: 'Emmanuel Diaz Leal Hernandez', url: siteMetadata.siteUrl }],
    creator: 'Emmanuel Diaz Leal Hernandez',
    openGraph: {
      title: localeTitle,
      description: localeDescription,
      url: './',
      siteName: localeTitle, // Use dynamic title
      images: [siteMetadata.socialBanner],
      locale: locale,
      type: 'website',
    },
    alternates: {
      canonical: './',
      types: {
        'application/rss+xml': `${siteMetadata.siteUrl}/feed.xml`,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    twitter: {
      title: localeTitle, // Use dynamic title
      description: localeDescription,
      site: siteMetadata.siteUrl,
      creator: siteMetadata.author, // Keep original author or update if needed
      card: 'summary_large_image',
      images: [siteMetadata.socialBanner],
    },
  }
}

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: LocaleTypes }
}) {
  return (
    <html
      lang={locale}
      dir={dir(locale)}
      className={`${space_grotesk.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      {/* Favicons and other head elements remain the same */}
      <link rel="apple-touch-icon" sizes="76x76" href="/static/favicons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon-16x16.png" />
      <link rel="manifest" href="/static/favicons/site.webmanifest" />
      <link rel="mask-icon" href="/static/favicons/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <body className="bg-white pl-[calc(100vw-100%)] text-black antialiased dark:bg-black dark:text-white">
        <TwSizeIndicator />
        <ThemeProviders>
          <SectionContainer>
            {/* Consider adding a subtle background pattern or gradient here */}
            <div className="flex min-h-screen flex-col justify-between">
              <SearchProvider>
                <Header />
                <main className="mb-auto px-4 py-6 sm:px-6 lg:px-8">{children}</main>
              </SearchProvider>
              <Footer />
            </div>
          </SectionContainer>
        </ThemeProviders>
      </body>
    </html>
  )
}
