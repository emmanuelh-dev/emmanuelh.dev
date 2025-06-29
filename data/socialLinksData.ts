export interface SocialLink {
  title: string
  description: string
  href: string
  type: 'social' | 'sponsored' | 'project' | 'shortcut'
  icon?: string
  verified?: boolean
}

export const socialLinksData: SocialLink[] = [
  // Social Media
  {
    title: 'GitHub',
    description: 'Check out my code and projects',
    href: 'https://github.com/emmanuelhdev',
    type: 'social',
    icon: 'github',
    verified: true,
  },
  {
    title: 'LinkedIn',
    description: 'Professional network and updates',
    href: 'https://www.linkedin.com/in/emmanuel-diaz-leal-hernandez/',
    type: 'social',
    icon: 'linkedin',
    verified: true,
  },
  {
    title: 'Instagram',
    description: 'Behind the scenes and daily life',
    href: 'https://instagram.com/emmanuelhdev',
    type: 'social',
    icon: 'instagram',
  },
  {
    title: 'TikTok',
    description: 'Tech tips and coding content',
    href: 'https://tiktok.com/@emmanuelhdev',
    type: 'social',
    icon: 'tiktok',
  },
  {
    title: 'Twitter/X',
    description: 'Quick updates and tech thoughts',
    href: 'https://x.com/emmanuelhdev',
    type: 'social',
    icon: 'x',
  },
  {
    title: 'YouTube',
    description: 'Coding tutorials and tech talks',
    href: 'https://youtube.com/@emmanuelhdev',
    type: 'social',
    icon: 'youtube',
  },
  
  // Projects & Shortcuts
  {
    title: 'Proteus 8 professional',
    description: 'My favorite circuit simulation software',
    href: 'https://electronica.bysmax.com/software/proteus',
    type: 'shortcut',
  },
  {
    title: 'Portfolio',
    description: 'My main portfolio website',
    href: 'https://emmanuelh.dev',
    type: 'project',
    verified: true,
  },
  {
    title: 'Dev Blog',
    description: 'Technical articles and tutorials',
    href: 'https://emmanuelh.dev/blog',
    type: 'shortcut',
  },
  {
    title: 'My Projects',
    description: 'Collection of my work',
    href: 'https://emmanuelh.dev/projects',
    type: 'shortcut',
  },
  {
    title: 'Contact Me',
    description: 'Get in touch for collaborations',
    href: 'mailto:contact@emmanuelh.dev',
    type: 'shortcut',
  },
  
  // Sponsored/Affiliate (examples)
  {
    title: 'Vercel',
    description: 'Best platform for deploying Next.js apps',
    href: 'https://vercel.com',
    type: 'sponsored',
  },
  {
    title: 'VS Code',
    description: 'My favorite code editor',
    href: 'https://code.visualstudio.com',
    type: 'sponsored',
  },
]
