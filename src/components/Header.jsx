import React from 'react'
import "./Header.scss"

const Header = ({header}) => {
  return (
    <div>
        <img src={header.image} alt="" />
        <p>{header.name}</p>
    </div>
  )
}

export default Header