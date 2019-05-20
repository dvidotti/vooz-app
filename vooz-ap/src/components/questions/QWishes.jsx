import React, { Component } from 'react'
import FormFour from '../forms/form-four/FormFour'
import './Q.css'

class QWishes extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  

  render() {
    return(
      <div className="full-page-black">
        <FormFour 
        label='Você quer cantar para?' 
        input1='Ser Feliz' 
        input2='Ser Famoso' 
        input3='Sair do Chuveiro'
        input4='Cantar Melhor' 
        option1='/yourvoice' 
        option2='/yourvoice' 
        option3='/yourvoice' 
        option4='/yourvoice'  
        />
      </div>
    )
  }
}

export default QWishes;
