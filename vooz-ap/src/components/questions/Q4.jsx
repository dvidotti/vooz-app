import React, { Component } from 'react'
import FormFour from '../forms/form-four/FormFour'
import './Q.css'
import legend9 from '../../img/Legenda 9 Mobile.svg'
import FooterWhite from '../footer/FooterWhite'



class Q4 extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
     
  render() {
      return(
        <div className="full-page-white">
          <FormFour 
          label='Falando de estílo? Você prefere?' 
          input1='Jazz' 
          input2='Rock' 
          input3='Pop'
          input4='MPB' 
          option1='/qjazz' 
          option2='/qrock'
          option3='/qpop'
          option4='/qmpb' 
          />
          <div className='legend-block'>
            <img className="legend" src={legend9} alt="progress"/>
          </div>
          <div className='footer-white'>
            <FooterWhite /> 
          </div>
        </div>
      )
    }
}

export default Q4;

