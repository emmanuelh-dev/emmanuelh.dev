import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link
      href={`/tags/${kebabCase(text)}`}
      className="mb-3 mr-3 justify-center rounded-full bg-neutral-950 px-2.5 py-0.5 text-center text-sm text-white dark:bg-neutral-100 dark:text-black"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
