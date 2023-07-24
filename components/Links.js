import React from 'react'
import { FaInstagram, FaTiktok, FaTwitter, FaFacebook, FaGlobe } from 'react-icons/fa'
import Enlace from '@/components/Enlaces'

const enlaces = [
  {
    color: 'rose',
    link: 'https://www.instagram.com/emmanuelh.dev',
    texto: 'Instagram',
    icono: FaInstagram,
  },
  {
    color: 'black',
    link: 'https://www.tiktok.com/@emmanuelh.dev',
    texto: 'TikTok',
    icono: FaTiktok,
  },
  {
    color: 'sky',
    link: 'https://twitter.com/emmanuelhdev',
    texto: 'Twitter',
    icono: FaTwitter,
  },
  {
    color: 'black',
    link: 'https://tailverse.tech',
    texto: 'Tailverse',
    icono: FaGlobe,
  },
  {
    color: 'black',
    link: 'https://bysmax.com',
    texto: 'BysMax',
    icono: FaGlobe,
  },
]

const Emmanuel = () => {
  return (
    <div className="">
      <div className="mx-auto max-w-xl">
        <Enlace enlaces={enlaces} />
      </div>
    </div>
  )
}

export default Emmanuel
