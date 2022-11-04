import React from 'react'
import "./About.scss"

const About = ({aboutMe}) => {

  return (
    <div className="aboutMe">
        <p>
            {aboutMe[0].info}
        </p>
        <p>
            {aboutMe[1].info}
        </p>
        <p>
            {aboutMe[2].info}
        </p>
    </div>
  )
}

export default About