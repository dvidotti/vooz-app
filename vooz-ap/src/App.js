import React, { Component } from 'react';
import Home from './components/home/Home'
import Play1 from './components/play/Play1'
import Play2 from './components/play/Play2'
import Play3 from './components/play/Play3'
import Play4 from './components/play/Play4'
import Q1 from './components/questions/Q1'
import Q2 from './components/questions/Q2'
import Q3 from './components/questions/Q3'
import QAir from './components/questions/QAir'
import QRange from './components/questions/QRange'
import QIntensity from './components/questions/QIntensity'
import Q4 from './components/questions/Q4'
import QJazz from './components/questions/QJazz'
import QRock from './components/questions/QRock'
import QPop from './components/questions/QPop'
import QMpb from './components/questions/QMpb'
import QWishes from './components/questions/QWishes'
import YourVoice from './components/your-voice/YourVoice'
import Course1 from './components/your-voice/Course1'
import SignUp from './components/auth/SignUp'
import LogIn from './components/auth/LogIn'
import Ella from './components/artist/Ella'
import Low from './components/passages/Low'
import StrongVoice from './components/passages/StrongVoice'
import LightVoice from './components/passages/LightVoice'
import High from './components/passages/High'
import Breath from './components/passages/Breath'
import ProtectedRoute from './components/auth/protected-route'
import AuthService from './components/auth/auth-service';


import { Switch, Route } from 'react-router-dom'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      level: '',
      range: '',
      intensity: '',
      air: '',
      style: '',
      record: '',
      artist: '',
      wishes: '',
      email: '',
      name: '',
      username: '',
      password: '',
      loggedInUser: null
    }
    this.service = new AuthService();
    this.getLevel = this.getLevel.bind(this);
    this.getStyle = this.getStyle.bind(this);
    this.getArtist = this.getArtist.bind(this);
    this.getWishes = this.getWishes.bind(this);
    this.getAir = this.getAir.bind(this);
    this.getRange = this.getRange.bind(this);
    this.getIntensity = this.getIntensity.bind(this);
  }
  

  getLevel(value){
    this.setState({level: value});
  }

  getStyle(value){
    this.setState({ style: value});
  }
  
  getArtist(value){
    this.setState({ artist: value});
  }
  
  getWishes(value){
    this.setState({ wishes: value});
  }
  
  getAir(value){
    this.setState({ air: value});
  }

  getRange(value){
    this.setState({ range: value});
  }
  
  getIntensity(value){
    this.setState({ intensity: value});
  }

  fetchUser(){
    if( this.state.loggedInUser === null ){
      this.service.loggedin()
      .then(response =>{
        console.log('>>>>>>', response)
        this.setState({
          loggedInUser: response
        }) 
      })
      .catch( err =>{
        console.log('caiu no catch =>>>>', err)
        this.setState({
          loggedInUser:  false
        }) 
      })
    }
  }

  getTheUser= (userObj) => {
    this.setState({
      loggedInUser: userObj
    })
  }


  render(){
    console.log('ARRENHA', this.state)
    this.fetchUser();
    console.log(this.state.loggedInUser)
    if(this.state.loggedInUser){ 
      return (
        <Switch>
           <Route path='/login' render={(props) => <LogIn userInfo={this.state} getUser={this.getTheUser} /> } />
          <Route exact path='/' component={Home} />
          <ProtectedRoute path='/course1' user={this.state.loggedInUser} userInfo={this.state} component={Course1} />
        </Switch>
      ) 
    } else {
      return (
        <div className="App">
          <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/play1' component={Play1} />
              <Route exact path='/play2' component={Play2} />
              <Route exact path='/play3' component={Play3} />
              <Route exact path='/play4' component={Play4} />
              <Route path='/q1' component={Q1} />
              <Route path='/q2' render={(props) =><Q2  getLevel={this.getLevel} />} />
              <Route path='/q3' render={(props) =><Q3  getLevel={this.getLevel} />} />
              <Route path='/qrange' render={(props) =><QRange  getRange={this.getRange} />} />
              <Route path='/qintensity' render={(props) =><QIntensity  getIntensity={this.getIntensity} />} />
              <Route path='/qair' render={(props) =><QAir  getAir={this.getAir} />} />
              <Route path='/q4' render={(props) => <Q4 getStyle={this.getStyle} />} />
              <Route path='/qjazz' render={(props) => <QJazz getArtist={this.getArtist} /> } />
              <Route path='/qpop' render={(props) => <QPop getArtist={this.getArtist} /> } />
              <Route path='/qrock' render={(props) => <QRock getArtist={this.getArtist} /> } />
              <Route path='/qmpb' render={(props) => <QMpb getArtist={this.getArtist} /> } />
              <Route path='/qwishes' render={(props) => <QWishes getWishes={this.getWishes} /> }/>
              <Route path='/yourvoice' render={(props) => <YourVoice userInfo={this.state} /> } />
              <Route path='/signup' render={(props) => <SignUp userInfo={this.state} getUser={this.getTheUser} /> } />
              <Route path='/login' render={(props) => <LogIn userInfo={this.state} getUser={this.getTheUser} /> } />
              <Route path='/ella' component={Ella} />
              <Route path='/low' component={Low} />
              <Route path='/breath' component={Breath} />
              <Route path='/high' component={High} />
              <Route path='/qstrong' component={StrongVoice} />
              <Route path='/qlight' component={LightVoice} />
            </Switch>
        </div>
      )
      }
    }
}

export default App;
