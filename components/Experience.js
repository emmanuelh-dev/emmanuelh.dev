import React from 'react'
import { DiNodejs, DiPython, DiPhp, DiLaravel, DiHtml5, DiCss3, DiJsBadge } from 'react-icons/di'
import { SiNextdotjs } from 'react-icons/si'
const experience = [
  {
    title: 'Gonzher Solutions',
    job: 'Full Stack Developer',
    date: 'Oct 2023 - Present',
    skills: ['NodeJS', 'JavaScript', 'Git', 'Php', 'Laravel'],
  },
  {
    title: 'Little Minds',
    job: 'Robotic Professor',
    date: 'Oct 2023 - Present',
    skills: [],
  },
  {
    title: 'ConnectIT',
    job: 'Developer',
    date: 'May 2023 - Sep 2023',
    skills: ['Nodejs', 'JS', 'Vue', 'Vuetify', 'Git', 'UX', 'FastAPI', 'Python'],
  },
  {
    title: 'BysMax',
    job: 'FrontEnd Developer',
    date: 'Jan 2021 - June 2023',
    skills: ['React', 'JS', 'NextJS', 'Node', 'TailwindCSS'],
  },
]

const Experience = () => {
  return (
    <div>
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-3xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Experience and skills
        </h1>
      </div>
      <section className="ml-4 lg:flex">
        <ol class="relative border-l">
          {experience.map((company) => (
            <li class="mb-10 ml-4" key={company.title}>
              <div class="border-tert bg-tert absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border bg-white"></div>
              <time class="mb-1 font-normal leading-none opacity-50">{company.date}</time>
              <h3 class="text-lg font-bold">{`${company.job} - ${company.title}`}</h3>
              <ul class="mb-4 font-normal opacity-75">
                {company.skills.map((skill) => (
                  <li key={skill} className=" ml-4 list-disc text-sm">
                    {skill}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>
    </div>
  )
}

export default Experience
