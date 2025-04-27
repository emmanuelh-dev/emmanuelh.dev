import React from 'react'
import Link from '@/components/mdxcomponents/Link'
import Tag from '@/components/tag'
import { formatDate } from 'pliny/utils/formatDate'
import { LocaleTypes } from 'app/[locale]/i18n/settings'

import { ArrowRightIcon, ClockIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import type { Blog } from 'contentlayer/generated'
import Image from 'next/image'

interface PostListProps {
  posts: Blog[]
  locale: LocaleTypes
  t: (key: string) => string
  maxDisplay: number
}

const PostList: React.FC<PostListProps> = ({ posts, locale, t, maxDisplay }) => {
  const colSpan = (i) => {
    if (i == 0) return 'lg:col-span-2'
  }

  const imageSpan = (i) => {
    if (i == 0) return 'lg:aspect-video'
  }

  return (
    <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {!posts.length && <li>{t('noposts')}</li>}
      {posts.slice(0, maxDisplay).map((post, i) => {
        const { slug, date, title, summary, tags, images } = post
        return (
          <li
            key={i}
            className={` ${colSpan(i)} flex flex-col overflow-hidden rounded-lg bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg dark:bg-gray-950 lg:p-6`}
          >
            <article className="flex h-full flex-col">
              <div className="flex flex-grow flex-col">
                <header>
                  <Image
                    src={images ? images[0] : '/static/images/heroku.png'}
                    alt={title}
                    width={400}
                    height={400}
                    className={`w-full rounded-lg object-cover ${imageSpan(i)}`}
                  />
                  <div className="mb-2 flex items-center justify-between">
                    <time
                      dateTime={post.date}
                      className="text-sm font-medium text-gray-500 dark:text-gray-400"
                    >
                      {formatDate(post.date)}
                    </time>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <ClockIcon className="mr-1 h-4 w-4" aria-hidden="true" />
                      {/* <span>{post.readTime} min read</span> */}
                    </div>
                  </div>
                  <h2 className="mb-2 text-xl font-bold leading-tight text-neutral-900 dark:text-gray-100">
                    <Link
                      href={`/${locale}/blog/${post.slug}`}
                      className="hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      {post.title}
                    </Link>
                  </h2>
                </header>
                <p className="mb-4 line-clamp-3 flex-grow text-gray-600 dark:text-gray-300">
                  {post.summary}
                </p>
                <footer>
                  <ul className="mb-4 flex list-none flex-wrap gap-2 p-0">
                    {post.tags.map((tag) => (
                      <li key={tag}>
                        <Badge
                          variant="secondary"
                          className="bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200"
                        >
                          {tag}
                        </Badge>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="mt-auto w-full">
                    <Link href={`/${locale}/blog/${post.slug}`}>
                      <span className="sr-only">Leer más sobre {post.title}</span>
                      <span aria-hidden="true">Leer más</span>{' '}
                      <ArrowRightIcon className="ml-2 h-4 w-4" aria-hidden="true" />
                    </Link>
                  </Button>
                </footer>
              </div>
            </article>
          </li>
        )
      })}
    </ul>
  )
}

export default PostList
