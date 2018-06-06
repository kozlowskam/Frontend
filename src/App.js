import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import QuizesList from './components/quizeslist'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/quizes" component={QuizesList} />
          <Route exact path="/quizes/:id" component={QuizesList} />
        </div>
      </Router>
    );
  }
}

export default App;
