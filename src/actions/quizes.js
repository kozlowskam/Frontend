import * as request from "superagent";

export const FETCHED_ALL_QUIZES = "FETCHED_ALL_QUIZES";
export const DELETE_QUIZ = "DELETE_QUIZ";

const baseUrl = "http://localhost:4001";

// export const fetchAllQuizes = () => (dispatch) => {
//     request
//     .get(`${baseUrl}/quizes`)
//     .then(response => dispatch({
//       type: FETCHED_ALL_QUIZES,
//       payload: response.body.quizes
//     }))
//     .catch(err => alert(err))
//     }

// export const deleteQuiz = (quizId) => (dispatch) => {
//     request
//       .delete(`${baseUrl}/quizes/${quizId}`)
//       .then(response => dispatch({
//         type: DELETE_QUIZ,
//         payload: quizId
//       }))
//   }

const quizes = [
  { id: 1, title: "quiz1" },
  { id: 2, title: "quiz2" },
  { id: 3, title: "quiz3" }
];

export function fetchAllQuizes() {
  return {
    type: FETCHED_ALL_QUIZES,
    payload: quizes
  };
}

export function deleteQuiz(quizId) {
  console.log("does it get here?", quizId);
  return {
    type: DELETE_QUIZ,
    payload: quizId
  };
}
