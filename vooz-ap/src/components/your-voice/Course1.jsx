import React, { Component } from 'react'
import NavBarBlack from '../navbar/NavBarBlack'
import '../../components/your-voice/YourVoice.css'
import { Redirect } from 'react-router-dom'
import AuthService from '../auth/auth-service';
import instructions from '../../instructions.json';
import logoScroll from '../../img/Logo Branco.png'


class Course1 extends Component {
  constructor(props){
    super(props);
    this.state = {
      levelInstruction: '',
      rangeInstruction: '',
      intensityInstruction: '',
      airInstruction: '',
      styleInstruction: '',
      artistInstruction: '',
      wishesInstruction: '',
      loggedInUser: true  
    }
    this.service = new AuthService();
    this.logoutUser = this.logoutUser.bind(this);
    // this.setLevel = this.setLevel.bind(this);
  }

  componentDidMount() {
    const setLevel = () => {
      if(this.props.loggedInUser.level === 'iniciante') {
        this.setState({levelInstruction: instructions.level[0]});    
      } else if (this.props.loggedInUser.level === 'intermediário') {
         this.setState({levelInstruction: instructions.level[1]});    
        } else if (this.props.loggedInUser.level === 'avançado') {
            this.setState({levelInstruction: instructions.level[2]}); 
        }
    }
    setLevel();

    const setRange = () => {
      if(this.props.loggedInUser.range === 'aguda') {
        this.setState({rangeInstruction: instructions.range[0]});    
      } else if (this.props.loggedInUser.range === 'grave') {
         this.setState({rangeInstruction: instructions.range[1]});    
        } 
    }
    setRange();
    
    const setAir = () => {
      if(this.props.loggedInUser.air === 'Sobra Ar') {
        this.setState({airInstruction: instructions.air[1]});    
      } else if (this.props.loggedInUser.air === 'Falta Ar') {
         this.setState({airInstruction: instructions.air[0]});    
        } 
    }
    setAir();
    
    const setLinks = () => {
      if(this.props.loggedInUser.style === 'Jazz') {
        this.setState({artistInstruction: instructions.links[0]});       
        } 
    }
    setLinks();
  }


  logoutUser() {
    this.service.logout()
    .then(() => {
      this.setState({ loggedInUser: false });
    })
  }

  render() { 
    if (this.state.loggedInUser === false) {
      return (
        <Redirect to="/login" />
      )
    } else {
      return(
        <div className="full-page-black-scroll">
          <NavBarBlack />
          <div className="scroll-course1">
            <hr className="line-course1" />
            <h1 class='title-lesson'>Olá, {this.props.loggedInUser.username}!</h1>
            <h1 class='subtitle-lesson'> O que descobrimos sobre a sua voz.</h1>
            <h2 class='user-lesson'>{this.state.levelInstruction}</h2>
            <h1 class='user-value-border'>Voz {this.props.loggedInUser.range}</h1>
            <h2 class='user-lesson-border'>{this.state.rangeInstruction}</h2>
            <h1 class='user-value-border'>{this.props.loggedInUser.air} ;)</h1>
            <h2 class='user-lesson-border'>{this.state.airInstruction}</h2>
            <h1 class='user-value-border'>Então é {this.props.loggedInUser.style}! Se inspira </h1>
            <div class="resp-container">
              <iframe className="resp-container"  src={this.state.artistInstruction} />
            </div>
            <h1 class='user-value-border'>Comece, solte a voz!</h1>
            <div class="resp-container">
              <iframe className="resp-container" src={instructions.links[1]} />
            </div>
            <button className='form-button' onClick={this.logoutUser} value='Logout' name='Logout'> Sair</button>
            <div className="logo-scroll">
              <img className="logo-scroll" src={logoScroll} alt="logo"/>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default Course1;