import React, { Component } from 'react';
import './App.css';
import QuizzesList from './components/quizzeslist'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/quizzes" component={QuizzesList} />
          <Route exact path="/quizzes/:id" component={QuizzesList} />
        </div>
      </Router>
    );
  }
}

export default App;
