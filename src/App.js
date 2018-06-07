import React, { Component } from "react";
import "./App.css";
import Quiz from "./components/QuestionsList";

import Login from "./components/LoginComponent";
import SignUp from "./components/SignUpComponent";
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
          <Route exact path="/quizzes" component={QuizzesList} />
          <Route exact path="/quizzes/:id" component={takequiz} />
          <Route exact path="/quizzes/createquiz" component={Quiz} />
        </div>
      </Router>
    );
  }
}

export default App;
