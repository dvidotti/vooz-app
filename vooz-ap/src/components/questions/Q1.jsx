import React, { Component } from 'react'
import FormTwo from '../forms/form-two/FormTwo'
import '../play/Play.css'
import Footer from '../footer/Footer'
import legend2 from '../../img/Legenda 2 Mobile.svg'

class Q1 extends Component {
  constructor(props){
    super(props);
    this.state = {
      level:""
    }
    this.getAnswer = this.getAnswer.bind(this);
  }

  getAnswer(value) {
    if(value === 1) {
      this.setState({level: 'iniciante'});
    //  this.props.getLevel(this.state.level);
    } if(value === 2) {
      this.setState({level:'intermediário'});
    //   this.props.getLevel(this.state.level);
    }
  }

  
  render() {
    return(
      <div>
        <div className="full-page-white">
          <FormTwo getAnswer={this.getAnswer} label='O que você achou?' input1='Fácil' input2='Difícil' option1='/play2' option2='/play3'/>
          <div className='legend-block-white'>
            <img className="legend-white" src={legend2} alt="progress"/>
          </div>
        </div>
        <Footer />  
      </div>
    )
  }
}

export default Q1;

