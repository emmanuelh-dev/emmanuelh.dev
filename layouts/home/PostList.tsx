import React from 'react'
import Link from '@/components/mdxcomponents/Link'
import Tag from '@/components/tag'
import { formatDate } from 'pliny/utils/formatDate'
import { LocaleTypes } from 'app/[locale]/i18n/settings'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRightIcon, ClockIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface Post {
  slug: string
  date: string
  title: string
  summary?: string | undefined
  tags: string[]
  language: string
  draft?: boolean
}

interface PostListProps {
  posts: Post[]
  locale: LocaleTypes
  t: (key: string) => string
  maxDisplay: number
}

const PostList: React.FC<PostListProps> = ({ posts, locale, t, maxDisplay }) => {
  return (
    <ul className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {!posts.length && <li>{t('noposts')}</li>}
      {posts.slice(0, maxDisplay).map((post) => {
        const { slug, date, title, summary, tags } = post
        return (
          <li key={post.slug} className="overflow-hidden transition-all duration-200 hover:shadow-lg hover:-translate-y-1 flex flex-col">
          <article className="h-full flex flex-col">
            <Card className="h-full flex flex-col">
              <figure className="m-0">
                {/* <img src={post.imageUrl} alt="" className="w-full h-48 object-cover" /> */}
              </figure>
              <CardContent className="p-6 flex-grow flex flex-col">
                <header>
                  <div className="flex justify-between items-center mb-2">
                    <time dateTime={post.date} className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      {formatDate(post.date)}
                    </time>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <ClockIcon className="w-4 h-4 mr-1" aria-hidden="true" />
                      {/* <span>{post.readTime} min read</span> */}
                    </div>
                  </div>
                  <h2 className="text-xl font-bold leading-tight mb-2 text-neutral-900 dark:text-gray-100">
                    <Link href={`/blog/${post.slug}`} className="hover:text-primary-600 dark:hover:text-primary-400">
                      {post.title}
                    </Link>
                  </h2>
                </header>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 flex-grow">
                  {post.summary}
                </p>
                <footer>
                  <ul className="flex flex-wrap gap-2 mb-4 list-none p-0">
                    {post.tags.map((tag) => (
                      <li key={tag}>
                        <Badge variant="secondary" className="bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200">
                          {tag}
                        </Badge>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full mt-auto">
                    <Link href={`/blog/${post.slug}`}>
                      <span className="sr-only">Leer más sobre {post.title}</span>
                      <span aria-hidden="true">Leer más</span> <ArrowRightIcon className="ml-2 w-4 h-4" aria-hidden="true" />
                    </Link>
                  </Button>
                </footer>
              </CardContent>
            </Card>
          </article>
        </li>
        )
      })}
    </ul>
  )
}

export default PostList
