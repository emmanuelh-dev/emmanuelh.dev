import Link from '@/components/mdxcomponents/Link'
import siteMetadata from '@/data/siteMetadata'
import NewsletterForm from '@/components/newletter/NewsletterForm'
import { createTranslation } from '../app/[locale]/i18n/server'
import { LocaleTypes } from '../app/[locale]/i18n/settings'
import PostList from './home/PostList'
import Image from 'next/image'

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
  posts: Post[]
  params: { locale: LocaleTypes }
}

const MAX_DISPLAY = 6

export default async function HomeLayout({ posts, params: { locale } }: HomeProps) {
  const { t } = await createTranslation(locale, 'home')
  const { t: tSite } = await createTranslation(locale, 'siteMetadata')

  return (
    <div className="mx-auto max-w-5xl">
      {/* Hero Section */}
      <div className="mb-24 space-y-8 text-center">
        <div className="space-y-6">
          <div className="relative mx-auto">
            <Image
              src={siteMetadata.image || '/static/images/avatar.png'}
              alt="Profile picture"
              width={120}
              height={120}
              className="mx-auto h-32 w-32 rounded-full object-cover ring-2 ring-gray-100 dark:ring-gray-800"
            />
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              {t('greeting')}, {siteMetadata.author}
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
              {t('description')} {tSite('description')}
            </p>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex justify-center gap-4 pt-2">
            <Link
              href={`/${locale}/projects`}
              className="inline-flex items-center rounded-lg bg-[#0070f3] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#0070f3]/90 focus:outline-none focus:ring-2 focus:ring-[#0070f3] focus:ring-offset-2"
            >
              {t('viewProjects')}
            </Link>
            <Link
              href={`/${locale}/about`}
              className="inline-flex items-center rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-800"
            >
              {t('aboutMe')}
            </Link>
          </div>
        </div>
      </div>

      {/* Latest Posts Section */}
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {t('latestPosts')}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">Recent thoughts and insights</p>
          </div>

          {posts.length > MAX_DISPLAY && (
            <Link
              href={`/${locale}/blog`}
              className="text-sm font-medium text-[#0070f3] transition-colors hover:text-[#0070f3]/80"
              aria-label={t('all')}
            >
              {t('all')} →
            </Link>
          )}
        </div>

        <PostList posts={posts as any} locale={locale} t={t} maxDisplay={MAX_DISPLAY} />
      </div>

      {/* Newsletter Section */}
      {siteMetadata.newsletter?.provider && (
        <div className="mt-24 rounded-lg border border-gray-200 bg-gray-50/50 p-8 text-center dark:border-gray-800 dark:bg-gray-900/50">
          <NewsletterForm />
        </div>
      )}
    </div>
  )
}
