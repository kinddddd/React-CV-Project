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
        <p>
          <a href={hero.gitHub} target="blank">
          <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub Img" className="gitLogo"/>
          GitHub
          </a>
        </p>
      </div>
  )
}

export default Hero