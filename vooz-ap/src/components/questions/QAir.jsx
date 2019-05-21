import React, { Component } from 'react'
import FormTwo from '../forms/form-two/FormTwo'
import '../play/Play.css'
import legend4 from '../../img/Legenda 4 Mobile.svg'
import Footer from '../footer/Footer' 


class QAir extends Component {
  constructor(props){
    super(props);
    this.state = {
      air: ''
    }
    this.getAnswerAir = this.getAnswerAir.bind(this);
  }

    getAnswerAir(value) {
      const faltaAr = 'Nem sempre a falta de ar ao cantar é por causa da sua respiração, a maneira como você usa o ar também pode causar essa sensação';
      const sobraAr = 'A respiração é onde começa o canto, se você não sente falta de ar ao cantar é um bom sinal, mas ainda dá pra falar muito sobre e melhoara a forma que você pensa sua respiração ;-)';
      if(value === 2) {
        this.setState({air: faltaAr }, () => {
          this.props.getAir(this.state.air);
        });
      } if(value === 1) {
        this.setState({air: sobraAr}, () => {
          this.props.getAir(this.state.air);
        });
      }
    }

    render() {
      console.log('PropsQ2', this.props)
      console.log('StateQ2', this.state )
      return(
        <div className="full-page-white">
          <FormTwo 
            air
            getAnswerAir= {this.getAnswerAir}
            label='Falta ar?' 
            input1='Sim, às vezes' 
            input2='Não, raro' 
            option1='/q4' 
            option2='/q4'
          />
          <div className='legend-block'>
            <img className="legend" src={legend4} alt="progress"/>
          </div>
          <Footer /> 
        </div>
      )
    }
}

export default QAir;

