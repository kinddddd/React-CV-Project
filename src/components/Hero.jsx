import React from 'react'
import "./Hero.scss"

const Hero = ({ hero }) => {
  return (
      <div className="mainInfo">
        <p>🗺️ {hero.city} </p>
        <p>🗓️ {hero.birthDate}</p>
        <p>
          <a href={"mailto:" + hero.email}>
          📧 alvaromoreno21197@gmail.com
          </a>
        </p>
        <p>📱 {hero.phone}</p>
        <p>
          <a href={hero.gitHub} target="blank">
          <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub Img" className="gitLogo"/>
          GitHub
          </a>
        </p>
        <p>
          <a href={hero.linkedin} target='blank'>
            <img src='https://assets.stickpng.com/images/58e91afdeb97430e81906504.png' alt='Linkedin' className='linkedinLogo'/>
            Linkedin
          </a>
        </p>
      </div>
  )
}

export default Hero