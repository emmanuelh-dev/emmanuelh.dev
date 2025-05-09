import { ReactNode } from 'react'

interface PageTitleProps {
  children: ReactNode
}

export default function PageTitle({ children }: PageTitleProps) {
  return (
    <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-neutral-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
      {children}
    </h1>
  )
}
