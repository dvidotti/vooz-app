import React from 'react'
import NavBar from '../navbar/NavBar'
import logo from '../../img/Logo Big.png'
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
    <NavBar />
    <img className="logo" src={logo} alt="vooz" />
    <h1 className="slogan">Descubra a sua voz</h1>
    <button className="btn-home"><Link className="link-home" to="/play1">Faça o teste</Link></button>
    </div>
  )
}

export default Home;