import React, { Component } from 'react'
import FormTwo from '../forms/form-two/FormTwo'
import '../play/Play.css'
import legend4 from '../../img/Legenda 4 Mobile.svg'
import Footer from '../footer/Footer' 



class Q3 extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

    render() {
      return(
        <div className="full-page-white">
          <FormTwo label='E agora como foi?' input1='Fácil' input2='Difícil' option1='/q4' option2='/q4'/>
          <div className='legend-block'>
            <img className="legend" src={legend4} alt="progress"/>
          </div>
          <Footer /> 
        </div>
      )
    }
}

export default Q3;

