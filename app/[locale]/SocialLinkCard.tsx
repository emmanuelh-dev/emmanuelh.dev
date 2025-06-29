'use client'

import { SocialLink } from '@/data/socialLinksData'
import { LocaleTypes } from './i18n/settings'

interface SocialLinkCardProps {
  link: SocialLink
  locale: LocaleTypes
}

export default function SocialLinkCard({ link, locale }: SocialLinkCardProps) {
  const isExternal = link.href.startsWith('http')
  const Component = isExternal ? 'a' : 'button'
  const extraProps = isExternal
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : { onClick: () => (window.location.href = link.href) }
  const getTypeColor = (type: string) => {
    return 'bg-gray-50 hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800'
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'social':
        return 'Social'
      case 'project':
        return 'Project'
      case 'sponsored':
        return 'Sponsored'
      case 'shortcut':
        return 'Quick Link'
      default:
        return ''
    }
  }

  return (
    <Component
      href={isExternal ? link.href : undefined}
      className={`group relative flex w-full items-center rounded-lg px-4 py-3 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${getTypeColor(link.type)}`}
      {...extraProps}
    >
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between">
          {' '}
          <div className="flex items-center gap-3">
            <h3 className="truncate text-sm font-medium text-gray-900 transition-colors group-hover:text-blue-600 dark:text-gray-100 dark:group-hover:text-blue-400">
              {link.title}
            </h3>
            {link.verified && (
              <div className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                <svg className="h-2.5 w-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            )}
          </div>
          <svg
            className="ml-2 h-4 w-4 flex-shrink-0 text-gray-400 transition-colors group-hover:text-blue-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </div>
        {link.description && (
          <p className="mt-1 truncate text-xs text-gray-500 dark:text-gray-400">
            {link.description}
          </p>
        )}
      </div>
    </Component>
  )
}
