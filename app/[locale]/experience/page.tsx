import ExperienceCard from '@/components/ExperienceCard'
import { experience, ExperienceProps } from '@/data/experience'
import React from 'react'
import { createTranslation } from '../i18n/server'
import { LocaleTypes } from '../i18n/settings'

const Experience = async ({locale}: {locale: string}) => {
  const lang = (locale as LocaleTypes) || 'es'
  const { t } = await createTranslation(lang, 'experience')
  
  return (
    <div className="mx-auto max-w-4xl">
      {/* Header Section */}
      <div className="mb-16 space-y-6">
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            {t('title')}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {t('description')}
          </p>
        </div>

        {/* Current year indicator */}
        <div className="flex items-center gap-3">
          <div className="flex h-6 w-6 items-center justify-center">
            <div className="h-2 w-2 rounded-full bg-[#0070f3]" />
          </div>
          <span className="text-sm font-medium text-gray-900 dark:text-white">{new Date().getFullYear()}</span>
          <div className="h-px flex-1 bg-gradient-to-r from-[#0070f3]/20 to-transparent" />
        </div>
      </div>

      {/* Timeline Section */}
      <div className="relative">
        {/* Main timeline container */}
        <div className="space-y-0">
          {experience[lang].map((company, index) => (
            <ExperienceCard
              key={`${company.title}-${company.date}`}
              title={company.title}
              description={company.description}
              job={company.job}
              link={company.link}
              date={company.date}
              skills={company.skills}
              isLast={index === experience[lang].length - 1}
            />
          ))}
        </div>

        {/* Timeline end indicator */}
        <div className="relative flex items-start gap-6">
          <div className="relative z-10 flex h-8 w-8 items-center justify-center">
            <div className="h-3 w-3 rounded-full bg-gray-200 ring-4 ring-white dark:bg-gray-700 dark:ring-gray-950" />
          </div>
          <div className="flex-1 pb-8">
            <span className="text-sm text-gray-500 dark:text-gray-400">{t('beginningOfJourney')}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
