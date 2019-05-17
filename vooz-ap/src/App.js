import React, { Component } from 'react';
import Home from './components/home/Home'
import Test from './components/test/Test'
import { Switch, Route } from 'react-router-dom'
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/test' component={Test} />
          </Switch>
      </div>
    );
  }
}

export default App;
