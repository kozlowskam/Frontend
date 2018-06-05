import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import QuizesList from './components/quizeslist'

class App extends Component {
  render() {
    return (
      <div className="App">
        <QuizesList />
      </div>
    );
  }
}

export default App;
