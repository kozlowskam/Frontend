import * as request from "superagent";

export const ADD_QUESTION = "ADD_QUESTION";
const baseUrl = "http://localhost:4000";

// export const addQuestion = question => {
//   return {
//     type: "ADD_QUESTION",
//     payload: question
//   };
// };

export const addQuestion = question => (dispatch, getState) => {
  const state = getState();

  request
    .post(`${baseUrl}/questions`)
    .send(question)
    .then(response =>
      dispatch({
        type: ADD_QUESTION,
        payload: response.body
      })
    );
};
