import ExperienceCard from '@/components/ExperienceCard'
import { experience, ExperienceProps } from '@/data/experience'
import React from 'react'

const Experience = ({locale}: {locale: string}) => {
  return (
    <div className="mx-auto max-w-4xl">
      {/* Header Section */}
      <div className="mb-16 space-y-6">
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Professional Experience
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            A timeline of my professional journey and key contributions across different roles and
            organizations.
          </p>
        </div>

        {/* Current year indicator */}
        <div className="flex items-center gap-3">
          <div className="flex h-6 w-6 items-center justify-center">
            <div className="h-2 w-2 rounded-full bg-[#0070f3]" />
          </div>
          <span className="text-sm font-medium text-gray-900 dark:text-white">2025</span>
          <div className="h-px flex-1 bg-gradient-to-r from-[#0070f3]/20 to-transparent" />
        </div>
      </div>

      {/* Timeline Section */}
      <div className="relative">
        {/* Main timeline container */}
        <div className="space-y-0">
          {experience[locale].map((company, index) => (
            <ExperienceCard
              key={`${company.title}-${company.date}`}
              title={company.title}
              description={company.description}
              job={company.job}
              link={company.link}
              date={company.date}
              skills={company.skills}
              isLast={index === experience[locale].length - 1}
            />
          ))}
        </div>

        {/* Timeline end indicator */}
        <div className="relative flex items-start gap-6">
          <div className="relative z-10 flex h-8 w-8 items-center justify-center">
            <div className="h-3 w-3 rounded-full bg-gray-200 ring-4 ring-white dark:bg-gray-700 dark:ring-gray-950" />
          </div>
          <div className="flex-1 pb-8">
            <span className="text-sm text-gray-500 dark:text-gray-400">Beginning of journey</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
