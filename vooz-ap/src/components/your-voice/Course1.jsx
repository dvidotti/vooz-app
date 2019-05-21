import React, { Component } from 'react'
import FormTwoBlack from '../forms/form-two/FormTwoBlack'
import '../../components/your-voice/YourVoice.css'
import { Redirect } from 'react-router-dom'
import AuthService from '../auth/auth-service';



class Course1 extends Component {
  constructor(props){
    super(props);
    this.state = {
      // level: this.props.userInfo.level,
      // range: this.props.userInfo.range,
      // intensity: this.props.userInfo.intensity,
      // air: this.props.userInfo.air,
      // style: this.props.userInfo.style,
      // record: this.props.userInfo.record,
      // artist: this.props.userInfo.artist,
      // wishes: this.props.userInfo.wishes,
      loggedInUser: true  
    }
    this.service = new AuthService();
    this.logoutUser = this.logoutUser.bind(this);
  }

  logoutUser() {
    this.service.logout()
    .then(() => {
      this.setState({ loggedInUser: false });
     // this.props.getUser(null);  
    })
  }

  render() { 
    console.log('props', this.props)
    if (this.state.loggedInUser === false) {
      return (
        <Redirect to="/login" />
      )
    } else {
      return(
        <div className="full-page-black-scroll">
          <button className='form-buttom' onClick={this.logoutUser} value='Logout' name='Logout'> LogOut</button>
          <FormTwoBlack
            label={`Parece que você é ${this.state.level} com aquela voz ${this.state.intensity} e quando canta todos falam que voz é ${this.state.range}. Você já fez sua primeira gravação e se quiser explorar mais o seu lado ${this.state.artist} e cantar melhor, comece aqui com nosso curso grátis. Parece que você é ${this.state.level} com aquela voz ${this.state.intensity} e quando canta todos falam que voz é ${this.state.range}. Você já fez sua primeira gravação e se quiser explorar mais o seu lado ${this.state.artist} e cantar melhor, comece aqui com nosso curso grátis. Parece que você é ${this.state.level} com aquela voz ${this.state.intensity} e quando canta todos falam que voz é ${this.state.range}. Você já fez sua primeira gravação e se quiser explorar mais o seu lado ${this.state.artist} e cantar melhor, comece aqui com nosso curso grátis. Parece que você é ${this.state.level} com aquela voz ${this.state.intensity} e quando canta todos falam que voz é ${this.state.range}. Você já fez sua primeira gravação e se quiser explorar mais o seu lado ${this.state.artist} e cantar melhor, comece aqui com nosso curso grátis.Parece que você é ${this.state.level} com aquela voz ${this.state.intensity} e quando canta todos falam que voz é ${this.state.range}. Você já fez sua primeira gravação e se quiser explorar mais o seu lado ${this.state.artist} e cantar melhor, comece aqui com nosso curso grátis. Parece que você é ${this.state.level} com aquela voz ${this.state.intensity} e quando canta todos falam que voz é ${this.state.range}. Você já fez sua primeira gravação e se quiser explorar mais o seu lado ${this.state.artist} e cantar melhor, comece aqui com nosso curso grátis.Parece que você é ${this.state.level} com aquela voz ${this.state.intensity} e quando canta todos falam que voz é ${this.state.range}. Você já fez sua primeira gravação e se quiser explorar mais o seu lado ${this.state.artist} e cantar melhor, comece aqui com nosso curso grátis. Parece que você é ${this.state.level} com aquela voz ${this.state.intensity} e quando canta todos falam que voz é ${this.state.range}. Você já fez sua primeira gravação e se quiser explorar mais o seu lado ${this.state.artist} e cantar melhor, comece aqui com nosso curso grátis.`}
            input1='LogOut' 
            input2='LogOut' 
            option1='/' 
            option2='/'
          />
          
        </div>
      )
    }
  }
}

export default Course1;