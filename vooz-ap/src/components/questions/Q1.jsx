import React, { Component } from 'react'
import FormTwo from '../forms/form-two/FormTwo'
import './Q.css'

class Q1 extends Component {
  constructor(props){
    super(props);
    this.state = {
      level:''
    }
    this.getAnswer = this.getAnswer.bind(this);
  }

 getAnswer(value){
   console.log(value)
   if(value === '1'){
     this.setState({level: 'intermediate'})
    } if (value === '2') {
      this.setState({level: 'begginer'})
    }
 }
  
  render() {
    console.log('mudou estado', this.state)
    return(
      <div>
        <FormTwo getAnswerQ1={() => this.getAnswer()} label='O que você achou?' input1='Fácil' input2='Difícil' option1='/play2' option2='/play3'/>
      </div>
    )
  }
}

export default Q1;

