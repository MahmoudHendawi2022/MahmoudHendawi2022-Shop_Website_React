import React from 'react'
import './NavLogo.css'
import logo from "../Assets/logo.png";

const NavLogo = () => {
  return (
    <div className="nav-logo">
          <img src={logo} alt="" />
          <p>SHOPPER</p>
        </div>
  )
}

export default NavLogo