import React, { Component } from 'react'
import FormTwoBlack from '../forms/form-two/FormTwoBlack'
import '../../components/your-voice/YourVoice.css'
import { Redirect } from 'react-router-dom'
import AuthService from '../auth/auth-service';
import instructions from '../../instructions.json';
import logo from '../../img/Logo Branco@3x.png';



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
     // this.props.getUser(null);  
    })
  }

  render() { 
    console.log('STATECHECK', this.state.artistInstruction)
    if (this.state.loggedInUser === false) {
      return (
        <Redirect to="/login" />
      )
    } else {
      return(
        <div className="full-page-black-scroll">
          <img className='white-logo' src={logo} alt='VoOZ Logo'/>
          <h1 class='user-value'> O que descobrimos!</h1>
          <h1 class='user-value'>Olá, {this.props.loggedInUser.username}</h1>
          <h2 class='user-lesson'>{this.state.levelInstruction}</h2>
          <h1 class='user-value'>{this.props.loggedInUser.range}</h1>
          <h2 class='user-range'>{this.state.rangeInstruction}</h2>
          <h1 class='user-value'>{this.props.loggedInUser.air}</h1>
          <h2 class='user-range'>{this.state.airInstruction}</h2>
          <h1 class='user-value'>{this.props.loggedInUser.style}: Uma canção para você se inspirar!</h1>
          <iframe className="video-box" width="560" height="315" src={this.state.artistInstruction} />
          <h1 class='user-value'> Uma dica para começar a cantar!  </h1>
          <iframe className="video-box" width="560"  height="315" src={instructions.links[1]} />
          <button className='form-button' onClick={this.logoutUser} value='Logout' name='Logout'> Sair</button>
        </div>
      )
    }
  }
}

export default Course1;