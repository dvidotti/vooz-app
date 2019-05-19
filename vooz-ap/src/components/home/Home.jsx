import React, { Component } from 'react'
import NavBar from '../navbar/NavBar'
import logo from '../../img/Logo Big.png'
import './Home.css'
import { Link } from 'react-router-dom'

class Home extends Component {
  constructor() {
    super();
    this.state = {
      level: '',
      range: '',
      intensity: '',
      air: '',
      style: '',
      record: '',
      artist: '',
      wishes: '',
      email: '',
      name: '',
      username: '',
      password: ''
    }
    console.log('########', this.state)
    this.handler = this.handler.bind(this);
  }
  

  handler() {
   this.setState({
    level: "begginer"
   });
   console.log('CHEGOU');
  };  
  

  render(){
    console.log('AGORA VAI', this.state)
    return (
      <div>
      <NavBar />
      {/* <button onClick={() => this.handler()}>ClickMe</button> */}
      <img className="logo" src={logo} alt="vooz" />
      <h1 className="slogan">Descubra a sua voz</h1>
      <button className="btn-home"><Link className="link-home" to='/play1'
          innerRef={this.handler}>Faça o teste</Link></button>
      </div>
    )
  }
}

export default Home;