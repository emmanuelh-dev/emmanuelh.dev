import 'css/prism.css'
import 'katex/dist/katex.css'
import { Metadata } from 'next'
import { components } from '@/components/mdxcomponents'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { sortPosts, coreContent, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs, allAuthors } from 'contentlayer/generated'
import type { Authors, Blog } from 'contentlayer/generated'
import PostSimple from '@/layouts/PostSimple'
import PostLayout from '@/layouts/PostLayout'
import PostBanner from '@/layouts/PostBanner'
import siteMetadata from '@/data/siteMetadata'
import { maintitle } from '@/data/localeMetadata'
import { notFound } from 'next/navigation'
import { LocaleTypes } from 'app/[locale]/i18n/settings'
import { ScrollArea } from '@/components/ui/scroll-area'
import TocBody from '@/components/sidetoc/TocBody'
import { a } from 'react-spring'

interface BlogPageProps {
  params: { slug: string[]; locale: LocaleTypes }
}

const defaultLayout = 'PostLayout'
const layouts = {
  PostSimple,
  PostLayout,
  PostBanner,
}

async function getPostFromParams({ params: { slug, locale } }: BlogPageProps): Promise<any> {
  const dslug = decodeURI(slug.join('/'))
  const post = allBlogs.filter((p) => p.language === locale).find((p) => p.slug === dslug) as Blog

  if (!post) {
    null
  }

  if (post?.series) {
    const seriesPosts = allBlogs
      .filter((p) => p.language === locale && p.series?.title === post.series?.title)
      .sort((a, b) => Number(a.series!.order) - Number(b.series!.order))
      .map((p) => {
        return {
          title: p.title,
          slug: p.slug,
          language: p.language,
          isCurrent: p.slug === post.slug,
        }
      })
    if (seriesPosts.length > 0) {
      return { ...post, series: { ...post.series, posts: seriesPosts } }
    }
  }

  return post
}

export async function generateMetadata({
  params: { slug, locale },
}: BlogPageProps): Promise<Metadata | undefined> {
  const dslug = decodeURI(slug.join('/'))
  const post = allBlogs.find((p) => p.slug === dslug && p.language === locale) as Blog
  if (!post) {
    return
  }
  const author = allAuthors.filter((a) => a.language === locale).find((a) => a.default === true)
  const authorList = post.authors || author
  const authorDetails = authorList.map((author) => {
    const authorResults = allAuthors
      .filter((a) => a.language === locale)
      .find((a) => a.slug.includes(author))
    return coreContent(authorResults as Authors)
  })
  const publishedAt = new Date(post.date).toISOString()
  const modifiedAt = new Date(post.lastmod || post.date).toISOString()
  const authors = authorDetails.map((author) => author.name)
  let imageList = [siteMetadata.socialBanner]
  if (post.images) {
    imageList = typeof post.images === 'string' ? [post.images] : post.images
  }
  const ogImages = imageList.map((img) => {
    return {
      url: img.includes('http') ? img : siteMetadata.siteUrl + img,
    }
  })

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      siteName: maintitle[locale],
      locale: post.language,
      type: 'article',
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
      url: './',
      images: ogImages,
      authors: authors.length > 0 ? authors : [siteMetadata.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.summary,
      images: imageList,
    },
  }
}

export const generateStaticParams = async () => {
  const paths = allBlogs.map((p) => ({ slug: p.slug.split('/') }))
  return paths
}

export default async function Page({ params: { slug, locale } }: BlogPageProps) {
  const dslug = decodeURI(slug.join('/'))
  // Filter out drafts in production + locale filtering
  const sortedCoreContents = allCoreContent(
    sortPosts(allBlogs.filter((p) => p.language === locale))
  )
  const postIndex = sortedCoreContents.findIndex((p) => p.slug === dslug)
  if (postIndex === -1) {
    return notFound()
  }

  const prev = sortedCoreContents[postIndex + 1]
  const next = sortedCoreContents[postIndex - 1]
  const post = await getPostFromParams({ params: { slug, locale } })
  const author = allAuthors.filter((a) => a.language === locale).find((a) => a.default === true)
  const authorList = post.authors || author
  const authorDetails = authorList.map((author) => {
    const authorResults = allAuthors
      .filter((a) => a.language === locale)
      .find((a) => a.slug.includes(author))
    return coreContent(authorResults as Authors)
  })
  const mainContent = coreContent(post)
  const jsonLd = post.structuredData
  jsonLd['author'] = authorDetails.map((author) => {
    return {
      '@type': 'Person',
      name: author.name,
    }
  })

  console.log(post.toc)

  return (
    <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="prose mx-auto w-full min-w-0 max-w-4xl dark:prose-invert lg:px-8">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="mb-8 space-y-8">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-gray-500">Emmanuel Hernandez</h2>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>May 25, 2024</span>
              <span>•</span>
              <div className="inline-flex items-center rounded-full border border-transparent bg-neutral-100 px-2.5 py-0.5 text-xs font-semibold text-neutral-900 transition-colors hover:bg-neutral-100/80 focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2 dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-800/80 dark:focus:ring-neutral-300">
                Intermediate
              </div>
              <span>•</span>
              <div className="inline-flex items-center rounded-full border border-transparent bg-neutral-100 px-2.5 py-0.5 text-xs font-semibold text-neutral-900 transition-colors hover:bg-neutral-100/80 focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2 dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-800/80 dark:focus:ring-neutral-300">
                Short
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">{post.title}</h1>
            <p className="text-xl text-gray-400">{post.summary}</p>
          </div>
        </div>
        <MDXLayoutRenderer code={post.body.code} components={components} toc={post.toc} />
      </div>
      <div className="hidden text-sm xl:block">
        <aside className="sticky top-10 -mt-10 h-[calc(100vh-3.5rem)] pt-4">
          <ScrollArea className="h-full py-6">
            <h2 className="text-2xl font-bold">Table of Contents</h2>
            <ul className="pl-4">
              {post.toc.map(({ value, url, depth }) => (
                <li className="mt-2">
                  <a href={url} key={url}>
                    {value}
                  </a>
                </li>
              ))}
            </ul>
          </ScrollArea>
        </aside>
      </div>
    </main>
  )
}
