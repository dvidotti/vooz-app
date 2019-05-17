import React, { Component } from 'react'
import FormTwo from '../forms/form-two/FormTwo'
import './Q.css'

class Q1 extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

    render() {
      return(
        <div>
          <FormTwo label='O que você achou?' input1='Fácil' input2='difícil' option1='/play2' option2='/play3'/>
        </div>
      )
    }
}

export default Q1;

