import React from 'react'
import "./About.scss"

const About = ({hero}) => {
  return (
    <div>
        <p>
            {hero.aboutMe}
        </p>
    </div>
  )
}

export default About