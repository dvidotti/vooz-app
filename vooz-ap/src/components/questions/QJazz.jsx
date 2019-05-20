import React, { Component } from 'react'
import FormFour from '../forms/form-four/FormFour'
import './Q.css'

class QJazz extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  

  render() {
    return(
      <div className="full-page-black">
        <FormFour 
        label='E se você fosse um cantorxs?' 
        input1='Tony Bennet' 
        input2='Ella Fitzgerald' 
        input3='Diana Krall'
        input4='Frank Sinatra' 
        option1='/qwishes' 
        option2='/qwishes' 
        option3='/qwishes' 
        option4='/qwishes' 
        />
      </div>
      )
  }
}

export default QJazz;
