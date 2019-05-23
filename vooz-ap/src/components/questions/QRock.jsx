import React, { Component } from 'react'
import FormFour from '../forms/form-four/FormFour'
import '../play/Play.css'
import legend9 from '../../img/Legenda 9 Mobile.svg'
import FooterWhite from '../footer/FooterWhite'

class QRock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: ''
    }
    this.getAnswerArtistRock = this.getAnswerArtistRock.bind(this);
  }
  
  getAnswerArtistRock(value){
    if(value === 1) {
        this.setState({ artist: 'Florence'}, () => {
          this.props.getArtist('Florence')
        })
    } if(value === 2) {
        this.setState({ artist: 'Eddie Veder'}, () => {
          this.props.getArtist('Eddie Veder')
        })
      } if(value === 3) {
          this.setState({ artist: 'Renato Russo'}, () => {
            this.props.getArtist('Renato Russo')
          })
        } if(value === 4) {
            this.setState({ artist: 'Rita Lee'}, () => {
              this.props.getArtist('Rita Lee')
            })
          }
  }
  

  render() {
    return(
      <div className="full-page-black">
        <FormFour 
          rock
          getAnswerArtistRock= {this.getAnswerArtistRock}
          label='E se você fosse um cantorxs?' 
          input1='Florence' 
          input2='Eddie Veder' 
          input3='Renato Russo'
          input4='Rita Lee' 
          option1='/qwishes' 
          option2='/qwishes' 
          option3='/qwishes' 
          option4='/qwishes' 
          />
          <div className='legend-block-white'>
            <img className="legend-white" src={legend9} alt="progress"/>
          </div>
          <div className='footer-white'>
            <FooterWhite /> 
          </div>
        </div>
      )
  }
}

export default QRock;
