import React, { Component } from 'react'
import FormFour from '../forms/form-four/FormFour'
import './Q.css'

class QWishes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: ''
    }
    this.getAnswerWishes = this.getAnswerWishes.bind(this);
  }
  
  getAnswerWishes(value){
    if(value === 1) {
        this.setState({ wishes: 'Ser Feliz'}, () => {
          this.props.getWishes('Ser Feliz')
        })
    } if(value === 2) {
        this.setState({ wishes: 'Ser Famoso'}, () => {
          this.props.getWishes('Ser Famoso')
        })
      } if(value === 3) {
          this.setState({ wishes: 'Sair do Chuveiro'}, () => {
            this.props.getWishes('Sair do Chuveiro')
          })
        } if(value === 4) {
            this.setState({ wishes: 'Cantar Melhor'}, () => {
              this.props.getWishes('Cantar Melhor')
            })
          }
  }
  

  render() {
    return(
      <div className="full-page-black">
        <FormFour 
          wishes
          getAnswerWishes= {this.getAnswerWishes}
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
