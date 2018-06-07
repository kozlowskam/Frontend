import React, { PureComponent } from "react";
import * as request from 'superagent'
// import SignUpComponent from './SignUpComponent'
import {Link} from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import {logIn} from '../actions/logInSignUpAction'



let logInInfo = {}
class LoginComponent extends PureComponent {




  handleSubmit(evt){
    evt.preventDefault()

    console.log(logInInfo, 'info needs to be pushed to auth when ready')   
    logIn(logInInfo)
  }

  handleChange(evt) {
    const {id, value } = evt.target
    logInInfo[id]= value
  }


    render() {
      return (
        <div className="logIn">
        <h1>Log In</h1>
          <form onSubmit={this.handleSubmit}>
            <p>login Name (e-mail)</p>
            <input 
                type="text"
                className="input"
                id="email"
                
                onChange={this.handleChange}
            />
            <p>password</p>
            <div>
            <input 
                type="text"
                className="input"
                id="password"
                
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
          <Link to='/signUp'>Sign up</Link>!
        </div>
      );
    }
  }
  
  export default LoginComponent;
  