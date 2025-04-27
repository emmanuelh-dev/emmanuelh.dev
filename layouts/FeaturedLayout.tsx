import { createTranslation } from 'app/[locale]/i18n/server'
import { LocaleTypes } from 'app/[locale]/i18n/settings'
import PostList from './home/PostList'
import LayoutHeader from './home/LayoutHeader'
import type { Blog } from 'contentlayer/generated'

interface Post {
  slug: string
  date: string
  title: string
  summary?: string | undefined
  tags: string[]
  language: string
  draft?: boolean
  featured?: boolean
}

interface HomeProps {
  posts: Blog[]
  params: { locale: LocaleTypes }
}

const MAX_DISPLAY = 2

export default async function FeaturedLayout({ posts, params: { locale } }: HomeProps) {
  const { t } = await createTranslation(locale, 'home')
  return (
    <>
      <div>
        <LayoutHeader title={t('featured')} />
        <PostList posts={posts} locale={locale} t={t} maxDisplay={MAX_DISPLAY} />
      </div>
    </>
  )
}
