import React, { Component } from 'react'
import FormTwoBlack from '../forms/form-two/FormTwoBlack'
import '../forms/form-two/FormTwoBlack.css'
import FooterWhite from '../footer/FooterWhite';


class YourVoice extends Component {
  constructor(props){
    super(props);
    this.state = {
      level: this.props.userInfo.level,
      range: this.props.userInfo.range,
      intensity: this.props.userInfo.intensity,
      air: this.props.userInfo.air,
      style: this.props.userInfo.style,
      record: this.props.userInfo.record,
      artist: this.props.userInfo.artist,
      wishes: this.props.userInfo.wishes,  
    }
  }

  render() {
    return(
      <div className="full-page-black">
        <FormTwoBlack
          label={`Parece que você é ${this.state.level} com aquela voz ${this.state.intensity} e quando canta todos falam que voz é ${this.state.range}. Você já fez sua primeira gravação e se quiser explorar mais o seu lado ${this.state.artist} e cantar melhor, comece aqui com nosso curso grátis.`}
          input1='Salve seu perfil' 
          input2='Faça o curso grátis' 
          option1='/signup' 
          option2='/singup'
        />
       <FooterWhite />
      </div>
    )
  }
}

export default YourVoice;