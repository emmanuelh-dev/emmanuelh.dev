import ExperienceCard from '@/components/ExperienceCard'
import { experience, ExperienceProps } from '@/data/experience'
import Link from 'next/link'
import React from 'react'
import { DiNodejs, DiPython, DiPhp, DiLaravel, DiHtml5, DiCss3, DiJsBadge } from 'react-icons/di'
import { SiNextdotjs } from 'react-icons/si'

const Experience = () => {
  return (
    <div className="text-md mx-auto max-w-xl">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-3xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Experience
        </h1>
      </div>
      <section className="ml-4 lg:flex">
        <ol className="relative flex-1 border-l">
          {experience.map((company) => (
            <ExperienceCard
              key={company.title}
              title={company.title}
              description={company.description}
              job={company.job}
              link={company.link}
              date={company.date}
              skills={company.skills}
            />
          ))}
        </ol>
      </section>
    </div>
  )
}

export default Experience
