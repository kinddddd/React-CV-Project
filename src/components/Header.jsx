import React from 'react'
import "./Header.scss"

const Header = ({header}) => {
  return (
    <div className="header">
        <img src={header.image} alt="" className="headerImg"/>
        <p className="fullName">{header.name}</p>
    </div>
  )
}

export default Header