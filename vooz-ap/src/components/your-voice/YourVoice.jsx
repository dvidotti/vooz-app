import React, { Component } from 'react'
import FormTwoBlack from '../forms/form-two/FormTwoBlack'
import '../forms/form-two/FormTwoBlack.css'
import FooterWhite from '../footer/FooterWhite';
import NavBarBlack from '../../components/navbar/NavBarBlack'


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
        <NavBarBlack />
        <FormTwoBlack
          label={`Cada voz é única, a sua voz ${this.state.range} é algo a se explorar nas suas interpretações. Ser ${this.state.level} é apenas um momento na sua história com o canto, a prática vai permitir você expressar cada vez mais esse canto que soa bem ${this.state.intensity}. Um dos seus estilos musicais preferidos é o ${this.state.style}  então se você quer cantar para ${this.state.wishes}, e explorar mais o seu lado ${this.state.artist}, salve seu perfil e descubra mais sobre sua voz`}
          input1='Salve seu perfil' 
          input2='Sua VoOZ' 
          option1='/signup' 
          option2='/singup'
        />
        <div className="footer-yourvoice">
          <FooterWhite />
        </div>
      </div>
    )
  }
}

export default YourVoice;