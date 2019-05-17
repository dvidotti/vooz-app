import React, { Component } from 'react';
import Home from './components/home/Home'
import Play1 from './components/play/Play1'
import Play2 from './components/play/Play2'
import Play3 from './components/play/Play3'
import Play4 from './components/play/Play4'
import Q1 from './components/questions/Q1'
import Q2 from './components/questions/Q2'
import Q3 from './components/questions/Q3'
import { Switch, Route } from 'react-router-dom'
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/play1' component={Play1} />
            <Route exact path='/play2' component={Play2} />
            <Route exact path='/play3' component={Play3} />
            <Route exact path='/play4' component={Play4} />
            <Route path='/q1' component={Q1} />
            <Route path='/q2' component={Q2} />
            <Route path='/q3' component={Q3} />
          </Switch>
      </div>
    );
  }
}

export default App;
