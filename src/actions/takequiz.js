import * as request from "superagent";

export const TAKE_QUIZ = "TAKE_QUIZ";

export const takeQuiz = question => {
  return {
    type: TAKE_QUIZ,
    payload: question
  };
};
