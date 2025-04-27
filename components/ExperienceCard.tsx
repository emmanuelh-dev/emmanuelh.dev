import { ExperienceProps } from '@/data/experience'
import React from 'react'

const ExperienceCard: React.FC<ExperienceProps> = ({
  title,
  description,
  job,
  link,
  date,
  skills, // skills prop is available but not used, consider adding it
}) => (
  <li className="mb-10 ml-6 rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-shadow duration-200 hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
    <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
      {/* Placeholder for potential icon based on job type or company */}
      <svg
        className="h-2.5 w-2.5 text-blue-800 dark:text-blue-300"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4Z" />
        <path d="M0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
      </svg>
    </span>
    <h3 className="mb-1 flex items-center text-lg font-semibold text-gray-900 dark:text-white">
      {`${job} at `}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="ml-1 text-blue-600 hover:underline dark:text-blue-500"
      >
        {title}
      </a>
      {/* Optional: Add a badge or tag here if needed */}
    </h3>
    <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
      {date}
    </time>
    <ul className="mb-4 list-inside list-disc space-y-1 text-base font-normal text-gray-500 dark:text-gray-400">
      {description?.map((item) => <li key={item}>{item}</li>)}
    </ul>
    {/* Consider displaying skills here */}
    {/* {skills && skills.length > 0 && (
      <div className="mt-2 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className="rounded bg-gray-100 px-2 py-1 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">
            {skill}
          </span>
        ))}
      </div>
    )} */}
  </li>
)

export default ExperienceCard
