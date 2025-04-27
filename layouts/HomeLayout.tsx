import Link from '@/components/mdxcomponents/Link'
import siteMetadata from '@/data/siteMetadata'
import NewsletterForm from '@/components/newletter/NewsletterForm'
import { createTranslation } from '../app/[locale]/i18n/server'
import { LocaleTypes } from '../app/[locale]/i18n/settings'
import PostList from './home/PostList'
// Removed unused LayoutHeader import
import Image from 'next/image'
import { Blog } from 'contentlayer/generated'

interface Post {
  slug: string
  date: string
  title: string
  summary?: string | undefined
  tags: string[]
  language: string
  draft?: boolean
}

interface HomeProps {
  posts: Blog[]
  params: { locale: LocaleTypes }
}

const MAX_DISPLAY = 7

export default async function HomeLayout({ posts, params: { locale } }: HomeProps) {
  const { t } = await createTranslation(locale, 'home')
  const { t: tSite } = await createTranslation(locale, 'siteMetadata')

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      {/* Hero Section */}
      <div className="space-y-6 pb-12 pt-6 text-center md:space-y-5 md:pt-10">
        <Image
          src={siteMetadata.image || '/static/images/avatar.png'}
          alt="avatar"
          width={192}
          height={192}
          className="mx-auto h-48 w-48 rounded-full border-4 border-primary-500 object-cover shadow-lg"
        />
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          {t('greeting')}, {siteMetadata.author}
        </h1>
        <p className="mx-auto max-w-2xl text-lg leading-7 text-gray-500 dark:text-gray-400">
          {t('description')} {tSite('description')}
        </p>
        {/* Optional: Add Call to Action Buttons */}
        <div className="flex justify-center space-x-4 pt-4">
          <Link
            href={`/${locale}/projects`}
            className="rounded-md bg-primary-500 px-4 py-2 text-white shadow hover:bg-primary-600 dark:hover:bg-primary-400"
          >
            {t('viewProjects', 'Ver Proyectos')} {/* Add translation key */}
          </Link>
          <Link
            href={`/${locale}/about`}
            className="rounded-md border border-gray-300 px-4 py-2 text-gray-700 shadow hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            {t('aboutMe', 'Sobre Mí')}
          </Link>
        </div>
      </div>

      {/* Blog Post Section */}
      <div className="space-y-2 pb-8 pt-10 md:space-y-5">
        <h2 className="text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-9">
          {t('latestPosts', 'Últimos Posts')} {/* Add translation key */}
        </h2>
      </div>
      <PostList posts={posts} locale={locale} t={t} maxDisplay={MAX_DISPLAY} />

      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end pt-6 text-base font-medium leading-6">
          <Link
            href={`/${locale}/blog`}
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label={t('all')}
          >
            {t('all')} &rarr;
          </Link>
        </div>
      )}

      {/* Newsletter Section - Keep if provider is defined */}
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pb-8 pt-12">
          <NewsletterForm />
        </div>
      )}
    </div>
  )
}
