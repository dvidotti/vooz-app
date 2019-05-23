import React, { Component } from 'react'
import FormTwo from '../forms/form-two/FormTwo'
import '../play/Play.css'
import legend4 from '../../img/Legenda 4 Mobile.svg'
import Footer from '../footer/Footer' 


class QIntensity extends Component {
  constructor(props){
    super(props);
    this.state = {
      intensity: ''
    }
    this.getAnswerIntensity = this.getAnswerIntensity.bind(this);
  }

    getAnswerIntensity(value) {
      if(value === 1) {
        this.setState({intensity: 'baixinho'}, () => {
          this.props.getIntensity(this.state.intensity);
        });
      } if(value === 2) {
        this.setState({intensity: 'vozeirão'}, () => {
          this.props.getIntensity(this.state.intensity);
        });
      }
    }

    render() {
      return(
        <div className="full-page-white">
          <FormTwo 
            intensity
            getAnswerIntensity= {this.getAnswerIntensity}
            label='Quando você canta sai?' 
            input1='Baixinho' 
            input2='Vozeirão' 
            option1='/qair' 
            option2='/qair'
          />
          <div className='legend-block-black'>
            <img className="legend-black" src={legend4} alt="progress"/>
          </div>
          <Footer /> 
        </div>
      )
    }
}

export default QIntensity;

