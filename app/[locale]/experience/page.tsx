import ExperienceCard from '@/components/ExperienceCard'
import { experience, ExperienceProps } from '@/data/experience'
import Link from 'next/link'
import React from 'react'
import { DiNodejs, DiPython, DiPhp, DiLaravel, DiHtml5, DiCss3, DiJsBadge } from 'react-icons/di'
import { SiNextdotjs } from 'react-icons/si'

const Experience = () => {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Experiencia Profesional
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Un resumen de mi trayectoria y roles desempeñados.
        </p>
      </div>
      <div className="container py-12">
        <div className="-m-4 flex flex-wrap justify-center">
          <section className="w-full p-4 md:w-2/3">
            <ol className="relative border-l border-gray-200 dark:border-gray-700">
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
      </div>
    </div>
  )
}

export default Experience
