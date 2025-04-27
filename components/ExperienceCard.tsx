import { ExperienceProps } from '@/data/experience'
import React from 'react'

const ExperienceCard: React.FC<ExperienceProps> = ({
  title,
  description,
  job,
  link,
  date,
  skills,
}) => (
  <div className="flex">
    <li className="mb-10 ml-4 flex-1">
      <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border bg-white"></div>
      <time className="mb-1 font-normal leading-none opacity-50">{date}</time>
      <a
        href={link}
        className="block text-lg font-bold"
        target="_blank"
        rel="noopener noreferrer"
      >{`${job} - ${title}`}</a>
      <ul className="text-neutral-400">
        {description?.map((item) => (
          <li className="ml-4 list-disc" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </li>
  </div>
)

export default ExperienceCard
