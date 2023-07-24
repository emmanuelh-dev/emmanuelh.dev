import React from 'react'
import { FaInstagram, FaTiktok, FaTwitter, FaFacebook } from 'react-icons/fa'

const EnlacesBloque = ({ enlaces }) => {
  return (
    <div className="flex flex-col justify-center ">
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
            className={`${bgColor} ${hoverBgColor} m-2 rounded py-3 px-4 font-bold text-white`}
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
