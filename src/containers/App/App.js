import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import './App.css';
import Calendar from '../Calendar/Calendar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Calendar></Calendar>
      </div>
    );
  }
}

export default App;
