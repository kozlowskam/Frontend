import * as request from "superagent";

export const FETCHED_ALL_QUIZZES = "FETCHED_ALL_QUIZZES";
export const DELETE_QUIZ = "DELETE_QUIZ";

const baseUrl = "http://localhost:4000";

export const fetchAllQuizzes = () => dispatch => {
  request
    .get(`${baseUrl}/quizzes`)
    .then(response =>
      dispatch({
        type: FETCHED_ALL_QUIZZES,
        payload: response.body.quizzes
      })
    )

    .catch(err => alert(err));
};

export const deleteQuiz = quizId => dispatch => {
  request
    .delete(`${baseUrl}/quizzes/${quizId}`)

    .then(response =>
      dispatch({
        type: DELETE_QUIZ,
        payload: quizId
      })
    );
};

// const quizes =  [
//     {id : 1, title : 'quiz1'},
//     {id : 2, title : 'quiz2'},
//     {id : 3, title : 'quiz3'}
// ]

// export function fetchAllQuizes() {
//     return {
//         type: FETCHED_ALL_QUIZES,
//         payload: quizes
//     }
// }

// export function deleteQuiz(quizId) {
//     console.log('does it get here?', quizId)
//     return {
//         type: DELETE_QUIZ,
//         payload: quizId
//     }

// }
