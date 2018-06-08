import React, { Component } from "react";
import "./App.css";

import QuestionList from "./components/QuestionsList";
import CreateQuiz from "./components/CreateQuiz";
import LoginComponent from "./components/LoginComponent";
import SignUpComponent from "./components/SignUpComponent";
import AppBar from "./components/AppBar";
import QuizzesList from "./components/quizzeslist";
import TakeQuiz from "./components/takequiz";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Takequiz from "./components/takequiz";
import quizResult from './components/QuizResult'
import AllResults from './components/AllResults'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <AppBar />

          <Route exact path="/createquiz" component={CreateQuiz} />
          <Route exact path="/createquestions" component={QuestionList} />
          <Route exact path="/quizzes/:id" component={TakeQuiz} />
          <Route exact path="/login" component={LoginComponent} />
          <Route exact path="/signUp" component={SignUpComponent} />
          <Route exact path="/quizzes" component={QuizzesList} />


          <Route exact path="/quizzes/:id/result" component={quizResult} />
          <Route exact path="/quizzes/:id/results" component={AllResults} />




        </div>
      </Router>
    );
  }
}

export default App;
