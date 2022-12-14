import React from 'react'
import "./Hero.scss"

const Hero = ({ hero }) => {
  return (
      <div className="mainInfo">
        <p>πΊοΈ {hero.city} </p>
        <p>ποΈ {hero.birthDate}</p>
        <p>
          <a href={"mailto:" + hero.email}>
          π§ alvaromoreno21197@gmail.com
          </a>
        </p>
        <p>π± {hero.phone}</p>
        <p>
          <a href={hero.gitHub} target="blank">
          <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub Img" className="gitLogo"/>
          GitHub
          </a>
        </p>
        <p>
          <a href={hero.linkedin} target='blank'>
            <img src='https://cdn.iconscout.com/icon/free/png-256/linkedin-208-916919.png' alt='Linkedin' className='linkedinLogo'/>
            Linkedin
          </a>
        </p>
      </div>
  )
}

export default Hero