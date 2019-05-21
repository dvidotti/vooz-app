import React from 'react'
import './NavBarBlack.css'
import menuwhite from '../../img/Menu Mobile Branco.png'
import { Link } from 'react-router-dom'

const NavBarTransparent = () => {
  return (
    <div className='navbar-transparent'>  
      <div className="horizontal-menu">
        <a className="left-menu-white" href='/about'>Sobre</a>
        <a className="right-menu-white" href='/about'>Compartilhe</a>
      </div>
      <button className="nav-button1"><Link to='/'><img src={menuwhite} alt='Menu'/></ Link></button>
    </div>
  )
}

export default NavBarTransparent;