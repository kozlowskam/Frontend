import React, { Component } from "react";
import "./App.css";

import QuestionList from "./components/QuestionsList";
import CreateQuiz from "./components/CreateQuiz";
import LoginComponent from "./components/LoginComponent"
import SignUpComponent from "./components/SignUpComponent"
import AppBar from "./components/AppBar";
import QuizzesList from "./components/quizzeslist";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import takequiz from "./components/takequiz.js";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
      <AppBar />
          <Route exact path="/login" component={LoginComponent} />
          <Route exact path="/signUp" component={SignUpComponent} />
          <Route exact path="/quizzes" component={QuizzesList} />
          <Route exact path="/quizzes/:id" component={takequiz} />
          <Route exact path="/quizzes/createquiz" component={Quiz} />
        </div>
      </Router>
    );
  }
}

export default App;
