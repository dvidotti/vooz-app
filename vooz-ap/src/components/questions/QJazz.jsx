import React, { Component } from 'react'
import FormFour from '../forms/form-four/FormFour'
import './Q.css'
import FooterWhite from '../footer/FooterWhite'
import legend10 from '../../img/Legenda 10 Mobile.svg'


class QJazz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: ''
    }
    this.getAnswerArtist = this.getAnswerArtist.bind(this);
  }
  
  getAnswerArtist(value){
    if(value === 1) {
        this.setState({ artist: 'Tony Bennet'}, () => {
          this.props.getArtist('Tony Bennet')
        })
    } if(value === 2) {
        this.setState({ artist: 'Ella Fitzgerald'}, () => {
          this.props.getArtist('Ella Fitzgerald')
        })
      } if(value === 3) {
          this.setState({ artist: 'Diana Krall'}, () => {
            this.props.getArtist('Diana Krall')
          })
        } if(value === 4) {
            this.setState({ artist: 'Frank Sinatra'}, () => {
              this.props.getArtist('Frank Sinatra')
            })
          }
  }

  render() {
    return(
      <div className="full-page-black">
        <FormFour 
        artists
        getAnswerArtist= {this.getAnswerArtist}
        label='E se você fosse um cantorxs?' 
        input1='Tony Bennet' 
        input2='Ella Fitzgerald' 
        input3='Diana Krall'
        input4='Frank Sinatra' 
        option1='/qwishes' 
        option2='/ella' 
        option3='/qwishes' 
        option4='/qwishes' 
        />
        <div className='legend-block-white'>
            <img className="legend-white" src={legend10} alt="progress"/>
          </div>
          <div className='footer-white'>
            <FooterWhite /> 
          </div>
      </div>
    )
  }
}

export default QJazz;
