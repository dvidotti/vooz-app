import React, { Component } from 'react'
import FormTwoBlack from '../forms/form-two/FormTwoBlack'
import '../forms/form-two/FormTwoBlack.css'


class YourVoice extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

    render() {
      return(
        <div className="full-page-black">
          <FormTwoBlack 
            label='Parece que você é [Iniciante], com aquela voz [leve] e quando canta todos falam que voc[aguda]. Você já fez sua primeira gravação e se quiser explorar mais o seu lado [Gal] e cantar melhor, comece aqui com nosso curso grátis.' 
            input1='Salve seu perfil' 
            input2='Faça o curso grátis' 
            option1='/signup' 
            option2='/singup'
          />
        </div>
      )
    }
}

export default YourVoice;