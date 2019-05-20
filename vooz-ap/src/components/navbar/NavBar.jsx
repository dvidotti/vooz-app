import React from 'react'
import './NavBar.css'
import menu from '../../img/Symbol Menu.png'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='navbar'>  
      <div className="horizontal-menu">
        <a className="left-menu" href='/about'>Sobre</a>
        <a className="right-menu" href='/about'>Compartilhe</a>
      </div>
      <button className="nav-button1"><Link to='/'><img src={menu} alt='Menu'/></ Link></button>
    </div>
  )
}

export default NavBar;