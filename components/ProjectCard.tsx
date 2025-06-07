import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface ProjectCardProps {
  title: string
  description: string
  imgSrc: string
  href: string
  tags: string[]
  type: 'web' | 'mobile' | 'api' | 'tool' | 'package'
  status: 'completed' | 'in-progress' | 'planning'
  year: string
}

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'web':
      return (
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
        </svg>
      )
    case 'mobile':
      return (
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z" />
        </svg>
      )
    case 'api':
      return (
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    case 'tool':
      return (
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    case 'package':
      return (
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    default:
      return null
  }
}

const getStatusColor = (status: string) => {
  switch (status) {
    case 'completed':
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
    case 'in-progress':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
    case 'planning':
      return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
  }
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imgSrc,
  href,
  tags,
  type,
  status,
  year
}) => {
  const isExternalLink = href.startsWith('http')

  return (
    <article className="group relative transition-all duration-200 hover:-translate-y-1">
      {/* Project Image */}
      <div className="mb-6 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
        <Image
          src={imgSrc}
          alt={title}
          width={600}
          height={300}
          className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          onError={(e) => {
            // Fallback to a placeholder if image fails to load
            const target = e.target as HTMLImageElement
            target.src = '/static/images/project-placeholder.png'
          }}
        />
      </div>

      {/* Project Meta */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-1">
            {getTypeIcon(type)}
            <span className="capitalize">{type}</span>
          </div>
          <span className="h-1 w-1 rounded-full bg-gray-300 dark:bg-gray-600" />
          <span>{year}</span>
        </div>
        
        <span className={`rounded-full px-3 py-1 text-xs font-medium ${getStatusColor(status)}`}>
          {status.replace('-', ' ')}
        </span>
      </div>

      {/* Project Title */}
      <h3 className="mb-3 text-xl font-semibold leading-snug text-gray-900 dark:text-white">
        {isExternalLink ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[#0070f3]"
          >
            {title}
          </a>
        ) : (
          <Link href={href} className="transition-colors hover:text-[#0070f3]">
            {title}
          </Link>
        )}
      </h3>

      {/* Project Description */}
      <p className="mb-6 line-clamp-3 leading-relaxed text-gray-600 dark:text-gray-300">
        {description}
      </p>

      {/* Project Tags */}
      {tags && tags.length > 0 && (
        <div className="mb-6 flex flex-wrap gap-2">
          {tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400"
            >
              {tag}
            </span>
          ))}
          {tags.length > 4 && (
            <span className="text-xs text-gray-400">+{tags.length - 4}</span>
          )}
        </div>
      )}

      {/* View Project Link */}
      <div className="flex items-center">
        {isExternalLink ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex items-center text-sm font-medium text-[#0070f3] transition-colors hover:text-[#0070f3]/80"
          >
            View Project
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
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        ) : (
          <Link
            href={href}
            className="group/link inline-flex items-center text-sm font-medium text-[#0070f3] transition-colors hover:text-[#0070f3]/80"
          >
            View Project
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
        )}
      </div>
    </article>
  )
}

export default ProjectCard
