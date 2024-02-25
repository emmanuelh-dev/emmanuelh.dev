import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import Image from 'next/image'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between">
        <header className="flex items-center justify-end py-10">
          {/* <div>
            <Link
              href="/"
              aria-label={siteMetadata.headerTitle}
              className="flex items-center justify-between"
            >
              <div className="flex items-center justify-between gap-2">
                <div className="">
                  <Image
                    width={50}
                    height={50}
                    objectFit="cover"
                    src={'/static/images/logo.png'}
                    alt=""
                  />
                </div>
                {typeof siteMetadata.headerTitle === 'string' ? (
                  <div className="hidden text-2xl font-semibold sm:block">
                    {siteMetadata.headerTitle}
                  </div>
                ) : (
                  siteMetadata.headerTitle
                )}
              </div>
            </Link>
          </div> */}
          <div className="flex items-center gap-4 text-base leading-5">
            <div className="hidden gap-4 sm:flex">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="font-medium text-gray-900 dark:text-gray-100"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <a href="https://www.linkedin.com/in/emmanuelhdev/" className="text-xl">
              <BsLinkedin />
            </a>
            <a href="https://github.com/emmanuelh-dev" className="text-xl">
              <BsGithub />
            </a>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
