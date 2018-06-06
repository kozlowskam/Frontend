import * as request from "superagent";

export const ADD_QUIZ = "ADD_QUIZ";

export const addQuiz = quiz => {
  return {
    type: "ADD_QUIZ",
    payload: quiz
  };
};
