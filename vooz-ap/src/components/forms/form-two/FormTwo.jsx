import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

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
    console.log(this.props)
    if(this.state.isSelect1) {
      return <Redirect to={this.props.option1} /> 
    } if(this.state.isSelect2) {
        return <Redirect to={this.props.option2}/> 
      }
    return(
      <div>
        <h1>{this.props.label}</h1>
        <button onClick={this.statusSelect1}>{this.props.input1}</button> 
        <button onClick={this.statusSelect2}>{this.props.input2}</button> 
      </div>
    )
  }
}

export default FormTwo;
