import React from 'react'
import './NavBar.css'
import menu from '../../img/Symbol Menu.png'

const NavBar = () => {
  return (
    <div>
      <div>
        <button className="nav-button1"><img src={menu} alt='Menu'/></button>
      </div>
    </div>
   
  )
}

export default NavBar;