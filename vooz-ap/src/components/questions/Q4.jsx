import React, { Component } from 'react'
import FormFour from '../forms/form-four/FormFour'
import '../play/Play.css'
import legend9 from '../../img/Legenda 9 Mobile.svg'
import FooterWhite from '../footer/FooterWhite'



class Q4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: ''
    }
    this.getAnswerFour = this.getAnswerFour.bind(this);
  }

  getAnswerFour(value){
    if(value === 1) {
      this.setState({ style: 'Jazz'}, () => {
        this.props.getStyle('Jazz')
      })
    } if(value === 2) {
      this.setState({ style: 'Rock'}, () => {
        this.props.getStyle('Rock')
      })
      } if(value === 3) {
        this.setState({ style: 'Pop'}, () => {
          this.props.getStyle('Pop')
        })
        } if(value === 4) {
          this.setState({ style: 'Mpb'}, () => {
            this.props.getStyle('Mpb')
          })
          }
  }
     
  render() {
    console.log(this.state)
      return(
        <div className="full-page-white">
          <FormFour 
          getAnswerFour={this.getAnswerFour}
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

