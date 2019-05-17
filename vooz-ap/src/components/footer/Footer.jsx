import React from 'react'
import './Footer.css'
import logoFooter from '../../img/som_vooz-01.png'

const Footer = () => {
  return (
    <div>
      <div>
        <button ><img className="footer-button1" src={logoFooter} alt="vooz"/></button>
      </div>
    </div>
   
  )
}

export default Footer;