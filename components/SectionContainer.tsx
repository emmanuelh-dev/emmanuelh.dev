import { ReactNode } from 'react'

interface SectionContainerProps {
  children: ReactNode
}

export default function SectionContainer({ children }: SectionContainerProps) {
  return (
    <>
      <section className="mx-auto max-w-4xl px-4 sm:px-6 xl:container xl:px-0">
        {children}
      </section>
    </>
  )
}
