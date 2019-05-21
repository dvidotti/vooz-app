import React, { Component } from 'react'
import FormTwo from '../forms/form-two/FormTwo'
import '../play/Play.css'
import legend4 from '../../img/Legenda 4 Mobile.svg'
import Footer from '../footer/Footer' 


class QRange extends Component {
  constructor(props){
    super(props);
    this.state = {
      range: ''
    }
    this.getAnswerRange = this.getAnswerRange.bind(this);
  }

  getAnswerRange(value) {
    if(value === 1) {
      this.setState({renge: 'grave'}, () => {
        this.props.getRange(this.state.range);
      });
    } if(value === 2) {
      this.setState({range:'aguda'}, () => {
        this.props.getRange(this.state.range);
      });
    }
  }

  render() {
    return(
      <div className="full-page-white">
        <FormTwo 
          range
          getAnswerRange= {this.getAnswerRange}
          label='Você acha sua voZ?' 
          input1='Grave' 
          input2='Aguda' 
          option1='/qintensity' 
          option2='/qintensity'
        />
        <div className='legend-block'>
          <img className="legend" src={legend4} alt="progress"/>
        </div>
        <Footer /> 
      </div>
    )
  }
}

export default QRange;

