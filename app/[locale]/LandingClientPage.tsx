'use client'

import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiExternalLink, FiArrowRight, FiCpu, FiGlobe, FiCode } from 'react-icons/fi'

interface LandingClientPageProps {
  locale: 'en' | 'es'
  t: (key: string) => string
  experienceData: Array<{
    title: string
    job: string
    link: string
    date: string
    skills: string[]
    description?: string[] | null
  }>
  projectsData: Array<{
    title: string
    description: string
    href: string
  }>
  socialLinks: Array<{
    title: string
    description: string
    href: string
    icon?: string
  }>
}

export default function LandingClientPage({
  locale,
  t,
  experienceData,
  projectsData,
  socialLinks,
}: LandingClientPageProps) {
  const reduceMotion = useReducedMotion()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  }

  const focusIcons = {
    fullstack: <FiCode className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    iot: <FiCpu className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />,
    geo: <FiGlobe className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />,
  }

  return (
    <div className="space-y-24 py-8">
      {/* 1. HERO SECTION */}
      <section className="relative flex flex-col items-start justify-center pt-16 md:pt-24 pb-8">
        <motion.div
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl space-y-6"
        >
          <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold tracking-wider text-blue-700 ring-1 ring-inset ring-blue-700/10 dark:bg-blue-950/30 dark:text-blue-400 dark:ring-blue-400/20">
            {t('hero_tagline')}
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-6xl sm:leading-none">
            {t('hero_title_1')}{' '}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-emerald-500 bg-clip-text text-transparent dark:from-blue-400 dark:via-indigo-300 dark:to-emerald-400">
              {t('hero_title_2')}
            </span>
          </h1>
          <p className="max-w-[60ch] text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            {t('hero_description')}
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg bg-gray-950 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-950 dark:bg-white dark:text-gray-950 dark:hover:bg-gray-100"
            >
              {t('cta_contact')}
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-950 hover:bg-gray-50 dark:border-gray-800 dark:text-white dark:hover:bg-gray-900"
            >
              {t('cta_projects')}
              <FiArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* 2. BENTO FOCUS SECTION */}
      <section className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
            {t('section_focus_title')}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-indigo-500" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 md:grid-cols-3"
        >
          {/* Card 1: Fullstack */}
          <motion.div
            variants={itemVariants}
            whileHover={reduceMotion ? {} : { y: -6 }}
            className="flex flex-col justify-between rounded-2xl border border-gray-100 bg-gray-50/50 p-8 transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-zinc-900/30"
          >
            <div className="space-y-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-950/30">
                {focusIcons.fullstack}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {t('focus_fullstack_title')}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {t('focus_fullstack_desc')}
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {['Next.js', 'React', 'FastAPI', 'Laravel', 'TypeScript'].map((tech) => (
                <span key={tech} className="rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700 dark:bg-zinc-800 dark:text-gray-300">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 2: IoT & Embedded */}
          <motion.div
            variants={itemVariants}
            whileHover={reduceMotion ? {} : { y: -6 }}
            className="flex flex-col justify-between rounded-2xl border border-gray-100 bg-gray-50/50 p-8 transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-zinc-900/30"
          >
            <div className="space-y-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 dark:bg-emerald-950/30">
                {focusIcons.iot}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {t('focus_iot_title')}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {t('focus_iot_desc')}
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {['Proteus', 'C/C++', 'Firmware', 'IoT', 'Hardware Design'].map((tech) => (
                <span key={tech} className="rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700 dark:bg-zinc-800 dark:text-gray-300">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 3: Geolocation & Logistics */}
          <motion.div
            variants={itemVariants}
            whileHover={reduceMotion ? {} : { y: -6 }}
            className="flex flex-col justify-between rounded-2xl border border-gray-100 bg-gray-50/50 p-8 transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-zinc-900/30"
          >
            <div className="space-y-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 dark:bg-indigo-950/30">
                {focusIcons.geo}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {t('focus_geo_title')}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {t('focus_geo_desc')}
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {['WMS', 'Google Maps API', 'GPS Systems', 'Real-time Tracking'].map((tech) => (
                <span key={tech} className="rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700 dark:bg-zinc-800 dark:text-gray-300">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 3. SELECTED PROJECTS SECTION */}
      <section id="projects" className="space-y-8 scroll-mt-20">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
            {t('section_projects_title')}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-emerald-600 to-teal-500" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={reduceMotion ? {} : { scale: 1.02 }}
              className="flex flex-col justify-between rounded-xl border border-gray-100 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-zinc-950"
            >
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {project.description}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-50 dark:border-zinc-900 flex items-center justify-between">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  {locale === 'es' ? 'Visitar sitio' : 'Visit Live'}
                  <FiExternalLink className="ml-1 h-3 w-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. EXPERIENCE TIMELINE SECTION */}
      <section className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
            {t('section_experience_title')}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-600 to-purple-500" />
        </div>

        <div className="relative border-l border-gray-200 pl-6 dark:border-gray-800 space-y-12">
          {experienceData.map((exp, index) => (
            <div key={index} className="relative">
              {/* Dot */}
              <span className="absolute -left-[31px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 ring-4 ring-white dark:bg-blue-400 dark:ring-black">
                <span className="h-1.5 w-1.5 rounded-full bg-white dark:bg-black" />
              </span>
              <div className="space-y-2">
                <span className="inline-block text-xs font-semibold text-blue-600 dark:text-blue-400">
                  {exp.date}
                </span>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {exp.job} <span className="font-normal text-gray-500">at</span>{' '}
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-gray-800 dark:text-gray-200"
                  >
                    {exp.title}
                  </a>
                </h3>
                {exp.description && (
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400 max-w-[65ch]">
                    {exp.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                )}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-700 dark:bg-zinc-800 dark:text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CONTACT & SOCIALS SECTION */}
      <section id="contact" className="rounded-2xl bg-gray-50 p-8 dark:bg-zinc-900/20 border border-gray-100 dark:border-gray-900 space-y-8 scroll-mt-20">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
            {t('section_contact_title')}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            {t('section_contact_desc')}
          </p>
          <div className="pt-2">
            <a
              href="mailto:contact@emmanuelh.dev"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              <FiMail className="h-4 w-4" />
              contact@emmanuelh.dev
            </a>
          </div>
        </div>

        <div className="border-t border-gray-200/60 pt-8 dark:border-gray-800/60">
          <h3 className="text-sm font-semibold tracking-wider text-gray-500 uppercase mb-4">
            {t('social_links_title')}
          </h3>
          <div className="flex flex-wrap gap-4">
            {socialLinks.map((link, index) => {
              const iconMap: Record<string, React.ReactNode> = {
                github: <FiGithub className="h-5 w-5" />,
                linkedin: <FiLinkedin className="h-5 w-5" />,
              }
              return (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                >
                  {link.icon && iconMap[link.icon]}
                  <span>{link.title}</span>
                </a>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
