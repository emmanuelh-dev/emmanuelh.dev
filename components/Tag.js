import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link
      href={`/tags/${kebabCase(text)}`}
      className="mr-3 rounded-full bg-primary-700 px-2.5 py-0.5 text-sm text-white mb-3"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
