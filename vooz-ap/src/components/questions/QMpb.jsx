import React, { Component } from 'react'
import FormFour from '../forms/form-four/FormFour'
import './Q.css'

class QMpb extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  

  render() {
      return(
        <div className="full-page-black">
          <FormFour 
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
        </div>
      )
  }
}

export default QMpb;
