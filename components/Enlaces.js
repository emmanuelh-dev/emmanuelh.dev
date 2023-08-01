import React from 'react'
import { FaInstagram, FaTiktok, FaTwitter, FaFacebook } from 'react-icons/fa'

const EnlacesBloque = ({ enlaces }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {enlaces.map((enlace, index) => {
        const Icono = enlace.icono
        const bgColor = `bg-${enlace.color}-500`
        const hoverBgColor = `hover:bg-${enlace.color}-600`
        return (
          <a
            key={index}
            href={enlace.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`${bgColor} ${hoverBgColor} my-3 block w-full rounded px-4 py-4 font-bold text-white`}
            style={{ backgroundColor: enlace.color }}
          >
            <Icono className="mr-2 inline" />
            {enlace.texto}
          </a>
        )
      })}
    </div>
  )
}

export default EnlacesBloque
