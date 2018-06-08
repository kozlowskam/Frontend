import * as request from "superagent";

export const ADD_QUIZ = "ADD_QUIZ";

const baseUrl = "http://localhost:4000";

export const addQuiz = quiz => (dispatch, getState) => {
  const state = getState();

  request
    .post(`${baseUrl}/quizzes`)
    .send(quiz)
    .then(response =>
      dispatch({
        type: ADD_QUIZ,
        payload: response.body
      })
    );
};
