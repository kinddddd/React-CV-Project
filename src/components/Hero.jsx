import React from 'react'
import "./Hero.scss"

const Hero = ({ hero }) => {
  return (
      <div className="mainInfo">
        <p>🗺️ {hero.city} </p>
        <p>🗓️ {hero.birthDate}</p>
        <p>
        📧 {hero.email}
        </p>
        <p>📱 {hero.phone}</p>
        <p>💾 <a href={hero.gitHub} target="blank">
            GitHub
          </a></p>
      </div>
  )
}

export default Hero