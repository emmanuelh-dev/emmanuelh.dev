import React from 'react'
import { DiNodejs, DiPython, DiPhp, DiLaravel, DiHtml5, DiCss3, DiJsBadge } from 'react-icons/di'
import { SiNextdotjs } from 'react-icons/si'

const experience = [
  {
    title: 'Gonzher Logistic and transport',
    job: 'Full Stack Developer',
    date: 'Oct 2023 - Present',
    skills: ['NodeJS', 'JavaScript', 'Git', 'Php', 'Laravel', 'UX'],
  },
  {
    title: 'ConnectIT',
    job: 'Developer',
    date: 'May 2023 - Sep 2023',
    skills: ['Nodejs', 'JavaScript', 'Vue', 'Vuetify', 'Git', 'UX', 'FastAPI', 'Python'],
  },
  {
    title: 'BysMax',
    job: 'FrontEnd Developer',
    date: 'Jan 2021 - June 2023',
    skills: ['React', 'JavaScript', 'NextJS', 'Node', 'TailwindCSS'],
  },
]

function calcularPorcentajeUso() {
  const habilidadesTotales = experience.reduce((total, trabajo) => total.concat(trabajo.skills), [])

  return experience.map((trabajo) => {
    const porcentajesHabilidades = trabajo.skills.reduce((porcentajes, habilidad) => {
      const usoPorcentaje = (
        (habilidadesTotales.filter((h) => h === habilidad).length / habilidadesTotales.length) *
        100
      ).toFixed(2)
      porcentajes[habilidad] = usoPorcentaje
      return porcentajes
    }, {})

    return {
      title: trabajo.title,
      job: trabajo.job,
      date: trabajo.date,
      skills: porcentajesHabilidades,
    }
  })
}

const Experience = () => {
  const experienciaConPorcentajes = calcularPorcentajeUso()

  return (
    <div>
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-3xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Experience and skills
        </h1>
      </div>
      <section className="ml-4 lg:flex">
        <ol class="relative flex-1 border-l">
          {experienciaConPorcentajes.map((company) => (
            <div className="flex" key={company.title}>
              <li class="mb-10 ml-4 flex-1">
                <div class="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border bg-white"></div>
                <time class="mb-1 font-normal leading-none opacity-50">{company.date}</time>
                <h3 class="text-lg font-bold">{`${company.job} - ${company.title}`}</h3>
                <ul class="mb-4 font-normal opacity-75">
                  {Object.entries(company.skills).map(([skill, porcentaje, index]) => (
                    <div className="flex justify-between" key={skill}>
                      <li className=" ml-4 list-disc text-sm">{skill}</li>
                      <span
                        key={index}
                        className={`mr-4 list-disc text-sm ${
                          porcentaje > 15
                            ? 'w-32 bg-green-600'
                            : porcentaje > 10
                            ? 'w-24 bg-green-400'
                            : 'w-14 bg-green-200'
                        } block h-[0.4rem]  rounded-full`}
                      ></span>
                    </div>
                  ))}
                </ul>
              </li>
            </div>
          ))}
        </ol>
      </section>
    </div>
  )
}

export default Experience
