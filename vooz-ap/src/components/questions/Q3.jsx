import React, { Component } from 'react'
import FormTwo from '../forms/form-two/FormTwo'
import '../play/Play.css'
import legend4 from '../../img/Legenda 4 Mobile.svg'
import Footer from '../footer/Footer' 



class Q3 extends Component {
  constructor(props){
    super(props);
    this.state = {
      level:""
    }
    this.getAnswer = this.getAnswer.bind(this);
  }

  getAnswer(value) {
    if(value === 1) {
      this.setState({level: 'intermediário'}, () => {
        this.props.getLevel(this.state.level);
      });
    } if(value === 2) {
      this.setState({level:'iniciante'}, () => {
        this.props.getLevel(this.state.level);
      });
    }
  }

    render() {
      return(
        <div className="full-page-white">
          <FormTwo getAnswer={this.getAnswer} label='E agora como foi?' input1='Fácil' input2='Difícil' option1='/q4' option2='/q4'/>
          <div className='legend-block4'>
            <img className="legend4" src={legend4} alt="progress"/>
          </div>
          <Footer /> 
        </div>
      )
    }
}

export default Q3;

