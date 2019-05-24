import React, { Component } from 'react'
import FormTwo from '../forms/form-two/FormTwo'
import '../play/Play.css'
import legend7 from '../../img/Legenda 7 Mobile.svg'
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
      const faltaAr = 'Falta Ar';
      const sobraAr = 'Sobra Ar';
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
        <div>
          <div className="full-page-white">
            <FormTwo 
              air
              getAnswerAir= {this.getAnswerAir}
              label='Falta ar?' 
              input1='Sim, às vezes !' 
              input2='Não, raramente' 
              option1='/breath' 
              option2='/breath'
            />
            <div className='legend-block-white'>
              <img className="legend-white" src={legend7} alt="progress"/>
            </div>
        </div>
          <Footer /> 
        </div>
      )
    }
}

export default QAir;

