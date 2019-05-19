import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import NavBar from '../../navbar/NavBar'
import Footer from '../../footer/Footer'

import './FormTwo.css'


class FormTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelect1: false,
      isSelect2: false
    }
    this.statusSelect1 = this.statusSelect1.bind(this);
    this.statusSelect2 = this.statusSelect2.bind(this);
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

  render() {
    if(this.state.isSelect1) {
      return <Redirect to={this.props.option1} /> 
    } if(this.state.isSelect2) {
        return <Redirect to={this.props.option2}/> 
      }
    return(
      <div>
        <NavBar />
        <h1 className='question'>{this.props.label}</h1>
        <div className='answer-box'>
          <button className='answer1' onClick={this.statusSelect1}>{this.props.input1}</button> 
          <button className='answer2'  onClick={this.statusSelect2}>{this.props.input2}</button> 
        </div>
        <Footer />  
      </div>
    )
  }
}

export default FormTwo;
