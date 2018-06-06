import React, { Component } from "react";
import "./App.css";
import Quiz from "./components/QuestionsList";
import AppBar from './components/AppBar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar />
        <Quiz />
      </div>
    );
  }
}

export default App;
