
import React, { Component } from "react";
import "./App.css";

import QuestionList from "./components/QuestionsList";
import CreateQuiz from "./components/CreateQuiz";
import LoginComponent from "./components/LoginComponent"
import SignUpComponent from "./components/SignUpComponent"
import AppBar from "./components/AppBar";
import QuizzesList from "./components/quizzeslist";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Takequiz from "./components/takequiz";
import quizResult from './components/QuizResult'

class App extends Component {
  render() {
    return (

      <Router>
        <div className="App">


          <AppBar />
        
    
          <Route exact path="/createquiz" component={CreateQuiz} />
          <Route exact path="/createquiz/:id" component={QuestionList} />
          <Route exact path="/login" component={LoginComponent} />
          <Route exact path="/signUp" component={SignUpComponent} />
          <Route exact path="/quizzes" component={QuizzesList} />
          <Route exact path="/quizzes/:id" component={Takequiz} />
          <Route exact path="/quizzes/:id/result" component={quizResult} />
     

        </div>
      </Router>
    );
  }
}

export default App;
