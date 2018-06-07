import * as request from "superagent";

export const ADD_QUIZ = "ADD_QUIZ";

export function addQuiz(quiz) {
  console.log("action", quiz);
  return {
    type: "ADD_QUIZ",
    payload: quiz
  };
}
