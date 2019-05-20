import React from 'react'
import './Footer.css'
import logoFooterWhite from '../../img/Logo Branco@3x.png'
import { Link } from 'react-router-dom'



const FooterWhite = () => {
  return (
    <div className="footer-button-white">
        <Link  to="/"><img className="logo-white-image" src={logoFooterWhite} alt="vooz"/></Link>  
    </div>
   
  )
}

export default FooterWhite;