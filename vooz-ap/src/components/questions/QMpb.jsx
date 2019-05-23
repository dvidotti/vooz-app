import React, { Component } from 'react'
import FormFour from '../forms/form-four/FormFour'
import '../play/Play.css'
import legend10 from '../../img/Legenda 10 Mobile.svg'
import FooterWhite from '../footer/FooterWhite'

class QMpb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: ''
    }
    this.getAnswerArtistMpb = this.getAnswerArtistMpb.bind(this);
  }
  
  getAnswerArtistMpb(value){
    if(value === 1) {
        this.setState({ artist: 'Caetano Veloso'}, () => {
          this.props.getArtist('Caetano Veloso')
        })
    } if(value === 2) {
        this.setState({ artist: 'Maria Rita'}, () => {
          this.props.getArtist('Maria Rita')
        })
      } if(value === 3) {
          this.setState({ artist: 'Gal Costa'}, () => {
            this.props.getArtist('Gal Costa')
          })
        } if(value === 4) {
            this.setState({ artist: 'Djavan'}, () => {
              this.props.getArtist('Djavan')
            })
          }
  }
  

  render() {
      return(
        <div className="full-page-black">
          <FormFour 
          mpb
          getAnswerArtistMpb= {this.getAnswerArtistMpb}
          label='E se você fosse um cantorxs?' 
          input1='Caetano Veloso' 
          input2='Maria Rita' 
          input3='Gal Costa'
          input4='Djavan' 
          option1='/qwishes' 
          option2='/qwishes' 
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

export default QMpb;
