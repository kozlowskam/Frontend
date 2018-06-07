import React, { PureComponent } from "react";
import * as request from 'superagent'
// import SignUpComponent from './SignUpComponent'
import {Link} from 'react-router-dom'
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import "../App.css";

import { Redirect } from 'react-router-dom'

let logInInfo = {}
class LoginComponent extends PureComponent {




  handleSubmit(evt){
    evt.preventDefault()
    console.log(logInInfo, 'info needs to be pushed to auth when ready')   
  }

  handleChange(evt) {
    const {id, value } = evt.target
    logInInfo[id]= value
  }


    render() {
      const textField = {
        width: 300,
        textAlign: 'center'
      }
      return (
        <div className="logIn">
        <h1>Log In</h1>
        <Paper className="styles" elevation={4}>
          <form onSubmit={this.handleSubmit}>
            <p>Email:  </p>
            <TextField
                style={textField}
                type="text"
                className="input"
                id="loginName"
                placeholder="Please enter email"
                onChange={this.handleChange}
            />
            <p>Password:</p>
            <div>
            <TextField
                style={textField} 
                type="text"
                className="input"
                id="password"
                placeholder="Please enter your password"
                onChange={this.handleChange}
            />
            </div>
            <div>
              <button
                type="submit"
                className="SubmitButton"
                id="loginButton"
                >submit</button>
            </div>
          </form>
          </Paper>
          <Link to='/signUp'>Sign up</Link>!
        </div>
      );
    }
  }
  
  export default LoginComponent;
  