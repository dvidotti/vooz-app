import React, { Component } from 'react'
import NavBarBlack from '../navbar/NavBarBlack'
import AuthService from '../auth/auth-service'
import { Link } from 'react-router-dom';
import './Auth.css'
import FooterWhite from '../footer/FooterWhite';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: this.props.userInfo.level,
      range: this.props.userInfo.range,
      intensity: this.props.userInfo.intensity,
      air: this.props.userInfo.air,
      style: this.props.userInfo.style,
      record: this.props.userInfo.record,
      artist: this.props.userInfo.artist,
      wishes: this.props.userInfo.wishes, 
      name: '',
      username: '',
      password: '', 
    }
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    const { level } = this.state
    const { range } = this.state
    const { air } = this.state
    const { style } = this.state
    const { record } = this.state
    const { artist } = this.state
    const { wishes } = this.state
  
    this.service.signup(username, password, level, range, air, style, record, artist, wishes)
    .then( response => {
        this.setState({
            username: "", 
            password: "",
        });
        this.props.getUser(response)
    })
    .catch( error => console.log(error) )
  }
  
  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render () {
    return(
      <div className='full-signup-page'>
        <NavBarBlack className='nave-bar-black' />
        <h1 className='title'>Descubra sua voz!</h1>
        <h2 className='subtitle'>Salve seu perfil</h2>
        <form className='form' onSubmit={this.handleFormSubmit}>
          <label className='form-label'>Nome:</label>
          <input className='form-input' type="text" name="username" value={this.state.username} onChange={ e => this.handleChange(e)}/>
          <label className='form-label'>Email:</label>
          <input className='form-input' type="text" name="email" value={this.state.email} onChange={ e => this.handleChange(e)}/>
          <label className='form-label'>Senha:</label>
          <input className='form-input' name="password" value={this.state.password} onChange={ e => this.handleChange(e)} />
          <input className='form-buttom' type="submit" value="Signup" />
        </form>
        <p>Já se inscreveu? 
            <Link to={"/login"}> Acesse</Link>
        </p>
        <FooterWhite />
      </div>
    )
  }
}

export default SignUp;