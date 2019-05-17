import React, { Component } from 'react'
import FormTwo from '../forms/form-two/FormTwo'
import './Q.css'


class Q3 extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

    render() {
      return(
        <div>
          <FormTwo label='Cante esta melodia também?' input1='Fácil' input2='Difícil' option1='/q4' option2='/q4'/>
        </div>
      )
    }
}

export default Q3;

