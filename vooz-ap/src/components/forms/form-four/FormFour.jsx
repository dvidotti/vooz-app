import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import NavBar from '../../navbar/NavBar'
import Footer from '../../footer/Footer'
import './FormFour.css'


class FormFour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelect1: false,
      isSelect2: false,
      isSelect3: false,
      isSelect4: false,
    }
    this.statusSelect1 = this.statusSelect1.bind(this);
    this.statusSelect2 = this.statusSelect2.bind(this);
    this.statusSelect3 = this.statusSelect3.bind(this);
    this.statusSelect4 = this.statusSelect4.bind(this);
  }

  statusSelect1() {
    this.setState({
      isSelect1: true
    });  
  }
  
  statusSelect2() {
    this.setState({
      isSelect2: true
    });  
  }

  statusSelect3() {
    this.setState({
      isSelect3: true
    });  
  }

  statusSelect4() {
    this.setState({
      isSelect4: true
    });  
  }

  render() {
    if(this.state.isSelect1) {
      return <Redirect to={this.props.option1} /> 
    } if(this.state.isSelect2) {
        return <Redirect to={this.props.option2}/> 
      } if(this.state.isSelect3) {
        return <Redirect to={this.props.option3}/>
        } if(this.state.isSelect4) {
          return <Redirect to={this.props.option4}/>
        }  
    return(
      <div className='full-page'>
        <NavBar />
        <h1 className='box-question'>Vamos falar de estilo.<br/>Você é do?</h1>
        <div className='answer-up-box'>
          <button className='answer1-box' onClick={this.statusSelect1}>Jazz</button> 
          <button className='answer2-box'  onClick={this.statusSelect2}>Rock</button> 
        </div>
        <div className='answer-bottom-box'>
          <button className='answer3-box'  onClick={this.statusSelect3}>Pop</button> 
          <button className='answer4-box'  onClick={this.statusSelect4}>MPB</button> 
        </div>
        <Footer /> 
      </div>
    )
  }
}

export default FormFour;
