import React from 'react'
import "./Hero.scss"

const Hero = ({ hero }) => {
  return (
    <div className="hero">
      <div className="mainInfo">
        <p>🗺️ {hero.city} </p>
        <p>🗓️ {hero.birthDate}</p>
        <p>
        📧
          <a href={"mailto:" + hero.email}>
          alvaromoreno21197@gmail.com
          </a>
        </p>
        <p>📱 {hero.phone}</p>
        <p>💾 <a href={hero.gitHub}>
            GitHub
          </a></p>
      </div>
    </div>
  )
}

export default Hero