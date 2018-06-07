import React, { PureComponent } from "react";
import * as request from 'superagent'



let logInInfo = {}
class Login extends PureComponent {




  handleSubmit(evt){
    evt.preventDefault()
    console.log(logInInfo)   
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
                id="loginName"
                
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
          <a href='url'>don't have an account? sign up!</a>
        </div>
      );
    }
  }
  
  export default Login;
  