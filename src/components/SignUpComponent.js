import React, { PureComponent } from "react";
import * as request from 'superagent'

let signUpInfo = {}

class SignUp extends PureComponent {

    fieldNames=["First name", "Last name", "Email", "Password",
     "Retype password"]

     handleSubmit(evt){
        evt.preventDefault()
        console.log(signUpInfo)   
      }

  
    handleChange(evt) {
        const {id, value } = evt.target
        signUpInfo[id]= value
      }

    render() {
      return (
            <div>

                <h1>Sign up</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.fieldNames.map((fieldId) =>  
                    <div>
                        <span>{ fieldId }</span>
                        <input  
                            type="text"
                            className="input"
                            id={fieldId} 
                            onChange={this.handleChange}               
                            />
                    </div>
                    )}

                    <div>
                        <button
                            type="submit"
                            className="submitButton"
                            onClick={this.handleSubmit.bind(this)}
                            id='SignupButton'
                            >submit</button>
                    </div>
                </form>
            </div>

              );
    }
  }
  
  export default SignUp;

