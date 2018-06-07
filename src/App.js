import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Quiz from "./components/QuestionsList";
import Login from "./components/LoginComponent"
import SignUp from "./components/SignUpComponent"


class App extends Component {
  render() {
    return (
      <div className="App">
        <Login/>
        <SignUp/>
      </div>
    );
  }
}

export default App;
