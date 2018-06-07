import React, { Component } from "react";
import * as request from 'superagent'

let signUpInfo = {}

class SignUpComponent extends Component {

    fieldNames=["First name", "Last name", "Email", "Password",
     "Retype password"]



     handleSubmit = event => {
        event.preventDefault()
            console.log(signUpInfo)
      }
    
      handleChangeName = event => {
        const { name, value } = event.target
        event.target.setCustomValidity('')
        if (!event.target.validity.valid) {
          event.target.setCustomValidity('Please enter your name')
        }
        signUpInfo[name] = value
      }
    
      handleChangeLastName = event => {
        const { name, value } = event.target
        event.target.setCustomValidity('')
        if (!event.target.validity.valid) {
          event.target.setCustomValidity('Please enter your Lastname')
        }
        signUpInfo[name] = value
      }
    
      handleChangeEmail = event => {
        const { name, value } = event.target
        event.target.setCustomValidity('')
        if (!event.target.validity.valid) {
          event.target.setCustomValidity('Please enter a valid email address')
        }
        signUpInfo[name] = value
      }
    
      handleChangePassword = event => {
        const { name, value } = event.target
        event.target.setCustomValidity('')
        if (!event.target.validity.valid) {
          event.target.setCustomValidity(
            'Password must be at least 8 characters long, with at least one letter and one number'
          )
        }
        signUpInfo[name] = value

      }
    
      handleChangeConfirm = event => {
        const { name, value } = event.target
        event.target.setCustomValidity('')
        if (!event.target.validity.valid) {
          event.target.setCustomValidity('Please confirm your password')
        }
        signUpInfo[name] = value
      }
    

    render() {
      return (
            <div>

                <h1>Sign up</h1>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                        <label>First Name &nbsp;:</label>
                        <input
                            type="firstName"
                            name="firstName"
                            required="required"
                            placeholder="Please enter first name"
                            onChange={this.handleChangeName.bind(this)}
                        />
                    </div>
                    <div>
                        <label>Last Name &nbsp;:</label>   
                        <input
                            type="lastName"
                            name="lastName"
                            required="required"
                            placeholder="Please enter your last name"
                            onChange={this.handleChangeLastName.bind(this)}
                        />
                    </div>
                    <div>
                        <label>Email &nbsp;:</label>   
                        <input
                            type="email"
                            name="email"
                            required="required"
                            pattern="(?!(^[.-].*|[^@]*[.-]@|.*\.{2,}.*)|^.{254}.)([a-zA-Z0-9!#$%&'*+\/=?^_`{|}~.-]+@)(?!-.*|.*-\.)([a-zA-Z0-9-]{1,63}\.)+[a-zA-Z]{2,15}"
                            placeholder="Please enter your email"
                            onChange={this.handleChangeEmail.bind(this)}
                        />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input
                            type="password"
                            name="password"
                            pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
                            required="required"
                            placeholder="Please enter your password"
                            onChange={this.handleChangePassword.bind(this)}
                        />
                    </div>
                    <div>
                        <label>Confirm Password:</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            required="required"
                            placeholder="Please confirm password"
                            onChange={this.handleChangeConfirm.bind(this)}
                        />
                    </div>
                    {signUpInfo.password &&
                        signUpInfo.confirmPassword &&
                        signUpInfo.password !== signUpInfo.confirmPassword && (
                        <p style={{ color: 'red' }}>The passwords do not match!</p>
                        )}
                    <button type="submit">Sign Up</button>
                </form>
            </div>

              );
    }
  }
  
  export default SignUpComponent;


