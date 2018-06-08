import * as request from 'superagent'

export const TAKE_QUIZ = 'TAKE_QUIZ'
const baseUrl = 'http://localhost:4000'

export const takeQuiz = (id, responses) => dispatch => {
  const response = {
    quizId: parseInt(id),
    input: Object.values(responses)
  }
  request
    .post(`${baseUrl}/responses`)
    .send(response)
    .then(result => {
      dispatch({
        type: TAKE_QUIZ,
        payload: result.body
      })
    })
    .catch(err => {
      console.log(err)
    })
  console.log('From the action controller:', response)
  console.log('From the action controller:', responses)
}
