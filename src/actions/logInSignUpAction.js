import * as request from "superagent";

export const LOG_IN = "LOG_IN";
export const SIGN_UP = "SIGN_UP";



export const logIn = logInData => dispatch => {
  request
    .post('http://localhost:4000/logins')
    .send(logInData)
    .then(result => {
      console.log(result.body)
      dispatch({
        type: LOG_IN,
        payload: result.body
      })
    })  
    .catch(err=> {
      if (err.status === 400) {
        // dispatch({      
            
        //   // type: USER_LOGIN_FAILED,
        //   // payload: result.body
        // })
      }
      else {
        console.error(err)
      }
    })
  }

