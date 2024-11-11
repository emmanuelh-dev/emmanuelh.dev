import { DocsSidebarNav, DocsSidebarNavItems } from "@/components/sidebar-nav"
import { ScrollArea } from "@/components/ui/scroll-area"
import { docsConfig } from "config/docs"
import { LocaleTypes } from "../i18n/settings"
import { allCoreContent, sortPosts } from "pliny/utils/contentlayer"
import { allBlogs } from "contentlayer/generated"
import { usePathname } from "next/navigation"

interface DocsLayoutProps {
  children: React.ReactNode
}

export default function DocsLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: LocaleTypes }
}) {



  const sortedCoreContents = allCoreContent(
    sortPosts(allBlogs.filter((p) => p.language === locale))
  )
  const items = sortedCoreContents.map((post) => ({
    title: post.title,
    href: `/${locale}/blog/${post.slug}`,
    items: [],
  }))

  return (
    <div>
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <aside className="sticky top-10 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
          <ScrollArea className="h-full py-6">
            <div className="px-8">
              <h2 className="font-bold text-2xl">Blog</h2>
              <DocsSidebarNavItems items={items} pathname={''} />
            </div>
          </ScrollArea>
        </aside>
        {children}
      </div>
    </div>
  )
}
