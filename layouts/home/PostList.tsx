import React from 'react'
import Link from '@/components/mdxcomponents/Link'
import { formatDate } from 'pliny/utils/formatDate'
import { LocaleTypes } from 'app/[locale]/i18n/settings'
import type { Blog } from 'contentlayer/generated'
import Image from 'next/image'

interface PostListProps {
  posts: Blog[]
  locale: LocaleTypes
  t: (key: string) => string
  maxDisplay: number
}

const PostList: React.FC<PostListProps> = ({ posts, locale, t, maxDisplay }) => {
  if (!posts.length) {
    return (
      <div className="py-12 text-center">
        <p className="text-gray-600 dark:text-gray-400">{t('noposts')}</p>
      </div>
    )
  }

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {posts.slice(0, maxDisplay).map((post, index) => {
        const { slug, date, title, summary, tags, images } = post
        const isFirstPost = index === 0

        return (
          <article
            key={slug}
            className={`group relative transition-all duration-200 hover:-translate-y-1 ${
              isFirstPost ? 'md:col-span-2 lg:col-span-2' : ''
            }`}
          >
            {/* Post Image */}
            {images && images[0] && (
              <div className="mb-6 overflow-hidden rounded-lg">
                <Image
                  src={images[0]}
                  alt={title}
                  width={600}
                  height={300}
                  className={`w-full object-cover transition-transform duration-300 group-hover:scale-105 ${
                    isFirstPost ? 'h-56 lg:h-72' : 'h-48'
                  }`}
                />
              </div>
            )}

            {/* Post Meta */}
            <div className="mb-4 flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
              <time dateTime={date} className="font-medium">
                {formatDate(date, locale)}
              </time>
              {tags && tags.length > 0 && (
                <>
                  <span className="h-1 w-1 rounded-full bg-gray-300 dark:bg-gray-600" />
                  <div className="flex gap-2">
                    {tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                    {tags.length > 2 && (
                      <span className="text-xs text-gray-400">+{tags.length - 2}</span>
                    )}
                  </div>
                </>
              )}
            </div>

            {/* Post Title */}
            <h3
              className={`mb-3 font-semibold leading-snug text-gray-900 dark:text-white ${
                isFirstPost ? 'text-2xl lg:text-3xl' : 'text-xl'
              }`}
            >
              <Link
                href={`/${locale}/blog/${slug}`}
                className="transition-colors hover:text-[#0070f3]"
              >
                {title}
              </Link>
            </h3>

            {/* Post Summary */}
            {summary && (
              <p
                className={`mb-6 leading-relaxed text-gray-600 dark:text-gray-300 ${
                  isFirstPost ? 'line-clamp-4 text-lg' : 'line-clamp-3'
                }`}
              >
                {summary}
              </p>
            )}

            {/* Read More Link */}
            <div className="flex items-center">
              <Link
                href={`/${locale}/blog/${slug}`}
                className="group/link inline-flex items-center text-sm font-medium text-[#0070f3] transition-colors hover:text-[#0070f3]/80"
              >
                {t('readMore')}
                <svg
                  className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default PostList
