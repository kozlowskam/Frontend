import React, { Component } from "react";
import "./App.css";
import Quiz from "./components/QuestionsList";
import AppBar from "./components/AppBar";
import QuizQuestions from "./components/Quiz";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar />
        <Quiz />
        <h1>{QuizQuestions}</h1>
      </div>
    );
  }
}

export default App;
