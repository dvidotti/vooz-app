import React, { Component } from 'react'
import NavBarBlack from '../navbar/NavBarBlack'
import AuthService from '../auth/auth-service'
import { Link, Redirect } from 'react-router-dom';
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
      redirect: false
    }
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { username } = this.state;
    const { password } = this.state;  
    const { level } = this.state;
    const { range } = this.state;
    const { intensity } = this.state;
    const { air } = this.state;
    const { style } = this.state;
    const { record } = this.state;
    const { artist } = this.state;
    const { wishes } = this.state;
    const { email } = this.state;
    const { name } = this.state;
    
    this.service.signup(username, password, level, range, intensity, air, style, record,  artist, wishes, email, name )
    .then( response => {
        this.setState({
            username: "", 
            password: "",
            redirect: true
        });
        // this.props.getUser(response)
    })
    .catch( error => console.log(error) )
  }
  
  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render () {
    if (this.state.redirect) {
      return( 
       <Redirect to='/login'/>
      )
    } else {
        return(
          <div className='full-signup-page'>
            <NavBarBlack className='nave-bar-black' />
            <hr className="line" />
            <h1 className='title'>Descubra sua voz!</h1>
            <h2 className='subtitle'>Salve seu perfil</h2>
            <form className='form' onSubmit={this.handleFormSubmit}>
              <label className='form-label'>Nome:</label>
              <input className='form-input' type="text" name="username" value={this.state.username} onChange={ e => this.handleChange(e)}/>
              <label className='form-label'>Email:</label>
              <input className='form-input' type="text" name="email" value={this.state.email} onChange={ e => this.handleChange(e)}/>
              <label className='form-label'>Senha:</label>
              <input className='form-input' name="password" value={this.state.password} onChange={ e => this.handleChange(e)} />
              <input className='form-buttom' type="submit" value="Se inscreva" />
            </form>
            <p>Já se inscreveu? 
                <Link to={"/login"}>  Acesse  </Link>
            </p>
            <FooterWhite />
          </div>
        )
      }
  }
}

export default SignUp;