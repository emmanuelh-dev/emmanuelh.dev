interface HeaderNavLink {
  href: string
  title: string
}

const headerNavLinks: { [locale: string]: HeaderNavLink[] } = {
  en :  [
    { href: '/', title: 'Home' },
    { href: '/blog', title: 'Blog' },
    { href: '/tags', title: 'Tags' },
    {href: '/experience', title: 'Experience'},
    { href: '/projects', title: 'Projects' },
    { href: '/social', title: 'Social' },
  ],
  es: [
    { href: '/', title: 'Inicio' },
    { href: '/blog', title: 'Blog' },
    { href: '/tags', title: 'Etiquetas' },
    {href: '/experience', title: 'Experiencia'},
    { href: '/projects', title: 'Proyectos' },
    { href: '/social', title: 'Social' },
  ]
}

export default headerNavLinks
