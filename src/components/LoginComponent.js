import React, { PureComponent } from "react";
import * as request from 'superagent'
import {Link} from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import {logIn} from '../actions/logInSignUpAction'
import {connect} from 'react-redux'
// import store from '../store'

let logInInfo = {}
class LoginComponent extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {}
  }


  handleSubmit(evt){
    evt.preventDefault()
    this.props.logIn(logInInfo) 
    }      
  


  handleChange(evt) {
    const {id, value } = evt.target
    logInInfo[id]= value
  }


    render() {
      if (this.props.currentUser.jwt) return (
         <Redirect to = "/quizzes"/>
      )

      return (
        <div className="logIn">
        <h1>Log In</h1>
          <form onSubmit={this.handleSubmit.bind(this)}>
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
                type="password"
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
  
  const mapStateToProps = (state) => {
    return {
      currentUser : state.logInReducer
    }
  }


  export default connect(mapStateToProps, {logIn})(LoginComponent)