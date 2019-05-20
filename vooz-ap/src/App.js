import React, { Component } from 'react';
import Home from './components/home/Home'
import Play1 from './components/play/Play1'
import Play2 from './components/play/Play2'
import Play3 from './components/play/Play3'
import Play4 from './components/play/Play4'
import Q1 from './components/questions/Q1'
import Q2 from './components/questions/Q2'
import Q3 from './components/questions/Q3'
import Q4 from './components/questions/Q4'
import QJazz from './components/questions/QJazz'
import QRock from './components/questions/QRock'
import QPop from './components/questions/QPop'
import QMpb from './components/questions/QMpb'
import QWishes from './components/questions/QWishes'
import YourVoice from './components/your-voice/YourVoice'
import { Switch, Route } from 'react-router-dom'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      level: 'igual',
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
    }
    this.getLevel = this.getLevel.bind(this);
    this.getStyle = this.getStyle.bind(this);
  }
  

  getLevel(value){
    this.setState({level: value});
  }

  getStyle(value){
    this.setState({ style: value});
  }

  render(){
    console.log('ARRENHHAAAAAA', this.state.style)
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
            <Route path='/q4' render={(props) => <Q4 getStyle={this.getStyle} />} />
            {/* <Route path='/q4' component={Q4} /> */}
            <Route path='/qjazz' component={QJazz} />
            <Route path='/qpop' component={QPop} />
            <Route path='/qrock' component={QRock} />
            <Route path='/qmpb' component={QMpb} />
            <Route path='/qwishes' component={QWishes} />
            <Route path='/yourvoice' component={YourVoice} />

          </Switch>
      </div>
    );
  }
}

export default App;
