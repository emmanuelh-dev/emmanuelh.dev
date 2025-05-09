import { allBlogs } from 'contentlayer/generated'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { MainNavItem, SidebarNavItem } from 'types/nav'

export interface DocsConfig {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
  chartsNav: SidebarNavItem[]
}
const sortedCoreContents = allCoreContent(sortPosts(allBlogs))
export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: 'Documentation',
      href: '/docs',
    },
    {
      title: 'Components',
      href: '/docs/components/accordion',
    },
    {
      title: 'Blocks',
      href: '/blocks',
    },
    {
      title: 'Charts',
      href: '/charts',
    },
    {
      title: 'Themes',
      href: '/themes',
    },
    {
      title: 'Examples',
      href: '/examples',
    },
    {
      title: 'Colors',
      href: '/colors',
    },
  ],
  sidebarNav: [
    {
      title: 'Blog',
      items: sortedCoreContents.map((post) => ({
        title: post.title,
        href: `/blog/${post.slug}`,
        items: [],
      })),
    },
  ],
  chartsNav: [
    {
      title: 'Getting Started',
      items: [
        {
          title: 'Introduction',
          href: '/docs/charts',
          items: [],
        },
        {
          title: 'Installation',
          href: '/docs/charts/installation',
          items: [],
        },
        {
          title: 'Theming',
          href: '/docs/charts/theming',
          items: [],
        },
      ],
    },
    {
      title: 'Charts',
      items: [
        {
          title: 'Area Chart',
          href: '/docs/charts/area',
          items: [],
        },
        {
          title: 'Bar Chart',
          href: '/docs/charts/bar',
          items: [],
        },
        {
          title: 'Line Chart',
          href: '/docs/charts/line',
          items: [],
        },
        {
          title: 'Pie Chart',
          href: '/docs/charts/pie',
          items: [],
        },
        {
          title: 'Radar Chart',
          href: '/docs/charts/radar',
          items: [],
        },
        {
          title: 'Radial Chart',
          href: '/docs/charts/radial',
          items: [],
        },
      ],
    },
    {
      title: 'Components',
      items: [
        {
          title: 'Tooltip',
          href: '/docs/charts/tooltip',
          items: [],
        },
        {
          title: 'Legend',
          href: '/docs/charts/legend',
          items: [],
        },
      ],
    },
  ],
}
