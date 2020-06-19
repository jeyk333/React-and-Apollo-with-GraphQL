import React from 'react'
import Logo from '../../assets/images/spacex-logo.png'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
      <img src={Logo} alt="SpaceX" className="logo" />
      <div className="navBar">
        <Link to="/launches">Launches</Link>
        <Link to="/rockets">Rockets</Link>
      </div>
    </div>
  )
}

export default Header
