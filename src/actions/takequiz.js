import * as request from "superagent";

export const TAKE_QUIZ = "TAKE_QUIZ";
const baseUrl = "http://localhost:4000";

export const takeQuiz = (id, responses) => dispatch => {
  const response = {
    quizId: id,
    input: Object.values(responses)
  };
  request
    .post(`${baseUrl}/responses`)
    .send(response)
    .then(result => {
      dispatch({
        type: TAKE_QUIZ,
        payload: result.body
      });
    });
  console.log("From the action controller:", response);
  console.log("From the action controller:", responses);
};
