import React, { Component } from 'react'
import NavBar from '../navbar/NavBar'
import logo from '../../img/Logo_animado_3s.gif'
import './Home.css'
import { Redirect } from 'react-router-dom'

class Home extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false
    }
    console.log('########', this.state)
    this.redirect = this.redirect.bind(this);
  }
  

  redirect() {
   this.setState({
    redirect: true
   });
  };  
  
  render(){
    if(this.state.redirect){
     return <Redirect to='/play1'/>
    }
    console.log('AGORA VAI', this.state)
    return (
      <div className="full-page-white">
        <NavBar />
        <div class="logo-home">
          <img className="logo" src={logo} alt="vooz" />
        </div>
        <h1 className="slogan">Descubra a sua voz</h1>
    <button onClick={this.redirect} className="btn-home">Faça o teste</button>
      </div>
    )
  }
}

export default Home;