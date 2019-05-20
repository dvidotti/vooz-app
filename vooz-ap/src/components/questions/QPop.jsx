import React, { Component } from 'react'
import FormFour from '../forms/form-four/FormFour'
import './Q.css'

class QPop extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  

  render() {
    return(
      <div className="full-page-black">
        <FormFour 
        label='E se você fosse um cantorxs?' 
        input1='Lady Gaga' 
        input2='Beyonce' 
        input3='Ed Sheran'
        input4='Maluma' 
        option1='/qwishes' 
        option2='/qwishes' 
        option3='/qwishes' 
        option4='/qwishes' 
        />
      </div>
    )
  }
}

export default QPop;
