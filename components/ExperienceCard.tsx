import { Experience, ExperienceProps } from '@/data/experience'
import React from 'react'

// Helper function to extract year from date string
const extractYear = (dateString: string): string => {
  const match = dateString.match(/(\d{4})/)
  return match ? match[1] : ''
}

// Helper function to parse and format date range
const formatDateRange = (
  dateString: string
): { startYear: string; endYear: string; period: string } => {
  const currentYear = new Date().getFullYear().toString()

  // Handle "Present" or current ongoing roles
  if (dateString.toLowerCase().includes('present')) {
    const startMatch = dateString.match(/(\w{3})\s+(\d{4})/)
    const startYear = startMatch ? startMatch[2] : currentYear
    return {
      startYear,
      endYear: currentYear,
      period: dateString,
    }
  }

  // Handle date ranges like "Jan 2021 - June 2023"
  const years = dateString.match(/(\d{4})/g)
  if (years && years.length >= 2) {
    return {
      startYear: years[0],
      endYear: years[years.length - 1],
      period: dateString,
    }
  }

  // Handle single year
  const singleYear = extractYear(dateString)
  return {
    startYear: singleYear,
    endYear: singleYear,
    period: dateString,
  }
}

const ExperienceCard: React.FC<Experience & { isLast?: boolean }> = ({
  title,
  description,
  job,
  link,
  date,
  skills,
  isLast = false,
}) => {
  const { startYear, endYear, period } = formatDateRange(date)

  return (
    <div className="relative">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-4 top-16 h-full w-px bg-gradient-to-b from-gray-200 to-transparent dark:from-gray-700" />
      )}

      {/* Year marker */}
      <div className="relative mb-8 flex items-start gap-6">
        {/* Year badge */}
        <div className="relative z-10 flex h-8 w-8 items-center justify-center">
          <div className="flex h-3 w-3 items-center justify-center rounded-full bg-[#0070f3] ring-4 ring-white dark:ring-gray-950">
            <div className="h-1.5 w-1.5 rounded-full bg-white" />
          </div>
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1 pb-8">
          {/* Year display */}
          <div className="mb-4">
            <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-200 dark:bg-gray-900 dark:text-gray-400 dark:ring-gray-800">
              {startYear === endYear ? startYear : `${startYear} - ${endYear}`}
            </span>
          </div>

          {/* Experience card */}
          <div className="group rounded-lg bg-gray-50/50 p-6 transition-all duration-200 hover:bg-gray-100/50 hover:shadow-sm dark:bg-gray-900/30 dark:hover:bg-gray-900/50">
            {/* Header */}
            <div className="mb-4">
              <div className="mb-2 flex items-start justify-between gap-4">
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                    {job}
                  </h3>
                  <div className="mt-1 flex items-center gap-2">
                    <span className="text-sm text-gray-600 dark:text-gray-400">at</span>
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-[#0070f3] transition-colors hover:text-[#0070f3]/80 dark:text-[#0070f3]"
                    >
                      {title}
                      <svg
                        className="ml-1 inline h-3 w-3"
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
                  </div>
                </div>
                <time className="text-sm text-gray-500 dark:text-gray-400">{period}</time>
              </div>
            </div>

            {/* Description */}
            {description && description.length > 0 && (
              <div className="mb-6">
                <ul className="space-y-2">
                  {description.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300"
                    >
                      <div className="mt-2 h-1 w-1 rounded-full bg-gray-400 dark:bg-gray-500" />
                      <span className="flex-1">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Skills */}
            {skills && skills.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-200 dark:bg-gray-900 dark:text-gray-300 dark:ring-gray-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExperienceCard
