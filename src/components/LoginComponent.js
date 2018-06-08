import React, { PureComponent } from "react";
import * as request from 'superagent'
// import SignUpComponent from './SignUpComponent'
import {Link} from 'react-router-dom'
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import "../App.css";
import Button from '@material-ui/core/Button';


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
        textAlign: 'center',
        marginBottom: 50
      }

      const butt = {
          background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
          borderRadius: 3,
          border: 0,
          color: 'white',
          height: 48,
          padding: '0 30px',
          boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
        }
      return (
        <div className="logIn">
        <h1>Log In</h1>
        <Paper className="styles" elevation={50}>
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
              <Button
                style={butt}
                type="submit"
                className="SubmitButton"
                id="loginButton"
                color="primary"
                >Become a Quizmaster...</Button>
            </div>
          </form>
          </Paper>
          <br/>
          <Button
                href='/signUp'
                variant="outlined"
                type="submit"
                className="SubmitButton"
                id="loginButton"
                color="secondary"
                >Sign Up Here!</Button>
          {/* <Link to='/signUp'>Sign up</Link>! */}
        </div>
      );
    }
  }
  
  export default LoginComponent;
  