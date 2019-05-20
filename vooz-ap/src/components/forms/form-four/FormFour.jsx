import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import NavBar from '../../navbar/NavBar'
import '../form-four/FormFour.css'


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
    if (this.props.artists) {
      this.setState({ isSelect1: true }, this.props.getAnswerArtist(1));  
    } else {
      this.setState({ isSelect1: true }, this.props.getAnswerFour(1));  
    }
  
  }
  
  statusSelect2() {
    this.setState({ isSelect2: true }, this.props.getAnswerFour(2));  
  }

  statusSelect3() {
    this.setState({ isSelect3: true }, this.props.getAnswerFour(3));   
  }

  statusSelect4() {
    this.setState({ isSelect4: true }, this.props.getAnswerFour(4)); 
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
      <div className='full-page-black'>
        <div className='navbar-white'>
          <NavBar />
        </div>
        <div className='box-question-black'>
           <h1 >{this.props.label}</h1>
        </div>
        <div className='answer-up-box-black '>
          <button className='answer1-box-black ' onClick={this.statusSelect1}><p>{this.props.input1}</p></button> 
          <button className='answer2-box-black '  onClick={this.statusSelect2}><p>{this.props.input2}</p></button> 
        </div>
        <div className='answer-bottom-box-black '>
          <button className='answer3-box-black '  onClick={this.statusSelect3}><p>{this.props.input3}</p></button> 
          <button className='answer4-box-black '  onClick={this.statusSelect4}><p>{this.props.input4}</p></button> 
        </div>
      </div>
    )
  }
}

export default FormFour;
