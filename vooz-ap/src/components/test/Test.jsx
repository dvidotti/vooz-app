import React from 'react'
import NavBar from '../navbar/NavBar'
import Footer from '../footer/Footer'
import play from '../../img/microfone_vooz-01.png'
import './Test.css'
import backgroundPlay from'../../img/fone_vooz-01.png'

const Test = () => {
  return (
    <div>
    <NavBar />
    <h1>Escute, depois cante.</h1>
    <h1>Repita a melodia</h1>
    <button className="btn-play"><img src={play} alt="play"/></button>
    <Footer />
    </div>
  )
}

export default Test;