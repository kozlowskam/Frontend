import React, { Component } from "react";
import "./App.css";
import QuestionList from "./components/QuestionsList";
import CreateQuiz from "./components/CreateQuiz";

import Login from "./components/LoginComponent";
import SignUp from "./components/SignUpComponent";
import AppBar from "./components/AppBar";
import QuizzesList from "./components/quizzeslist";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <AppBar />
          <Route exact path="/quizzes" component={QuizzesList} />
          <Route exact path="/quizzes/:id" component={QuizzesList} />
          <Route exact path="/createquiz" component={CreateQuiz} />
          <Route exact path="/createquiz/:id" component={QuestionList} />
        </div>
      </Router>
    );
  }
}

export default App;
