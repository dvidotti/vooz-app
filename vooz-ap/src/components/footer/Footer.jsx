import React from 'react'
import './Footer.css'
import logoFooter from '../../img/Logo Big.png'
import { Link } from 'react-router-dom'



const Footer = () => {
  return (
    <div>
      <div>
        <button><Link to="/"><img className="footer-button1" src={logoFooter} alt="vooz"/></Link></button>
      </div>
    </div>
   
  )
}

export default Footer;