
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import AuthService from '../auth/auth-service'
import { Link } from 'react-router-dom';
import NavBarBlack from '../navbar/NavBarBlack';
import FooterWhite from '../footer/FooterWhite';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = { 
      username: '',
      password: '',
      redirect: false 
    };
    this.service = new AuthService();
   
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    this.service.login(username, password)
    .then( response => {
      this.setState({ username: "", password: "", redirect: true });
      this.props.getUser(response)
    })
    .catch( error => console.log(error) )
  }
    
  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }
    
  render(){
    console.log(this.state.redirect)
    if (this.state.redirect) {
     return( 
      <Redirect to='/course1' />
     )
    } else {
      return(
        <div className='full-signup-page'>
          <NavBarBlack className='nave-bar' />
          <h1 className='title'>Descubra sua voz!</h1>
          <h2 className='subtitle'>Faça o login</h2>
          <form className='form' onSubmit={this.handleFormSubmit}>
            <label className='form-label'>Username:</label>
            <input className='form-input' type="text" name="username" value={this.state.username} onChange={ e => this.handleChange(e)}/>
            <label className='form-label'>Password:</label>
            <input className='form-input' name="password" value={this.state.password} onChange={ e => this.handleChange(e)} />
            <input className='form-buttom' type="submit" value="Login" />
          </form>
          <p>Não se inscreveu? 
              <Link to={"/signup"}>Signup</Link>
          </p>
          <FooterWhite />
        </div>
      )
    }
  }
}

export default Login;