
import React, { Component } from 'react';
import './App.css';
import QuizzesList from './components/quizzeslist';
import Quiz from "./components/QuestionsList";
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'



class App extends Component {
  render() {
    return (
      
      <Router>
        <div className="App">
          <Route exact path="/quizzes" component={QuizzesList} />
          <Route exact path="/quizzes/:id" component={QuizzesList} />
          <Route exact path="/quizzes/createquiz" component={Quiz} />
        </div>
      </Router>

    );
  }
}

export default App;
