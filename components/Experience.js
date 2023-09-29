import React from 'react'

const experience = [
  {
    title: 'Gonzher Solutions',
    job: 'Full Stack Developer',
    date: 'Oct 2023 - Present',
    skills: ['NodeJS', 'Python', 'JavaScript', 'Git', 'Flutter'],
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
    date: 'Jan 2022 - June 2023',
    skills: ['React', 'JS', 'NextJS', 'Node', 'TailwindCSS'],
  },
]

const Experience = () => {
  return (
    <div>
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-3xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Experience
        </h1>
      </div>
      <section className="ml-4">
        <ol class="relative border-l">
          {experience.map((company) => (
            <li class="mb-10 ml-4" key={company.title}>
              <div class="border-tert bg-tert absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border bg-white"></div>
              <time class="mb-1 font-normal leading-none opacity-50">{company.date}</time>
              <h3 class="text-lg font-semibold">{`${company.job}-${company.title}`}</h3>
              <ul class="mb-4 font-normal opacity-75 text-sm">
                {company.skills.map((skill) => (
                  <li key={skill} className=" list-disc ml-4">
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
