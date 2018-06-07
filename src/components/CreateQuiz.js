import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addQuiz } from "../actions/quiz";
import { Link } from "react-router-dom";
import QuestionForm from "./QuestionForm";
import QuizForm from "./QuizForm";

export class CreateQuiz extends PureComponent {
  // createAndChooseQuiz(title, webhook) {
  //   const { addQuiz, chosenQuiz } = this.props;

  //   const quiz = {
  //     title,
  //     webhook
  //   };
  //   console.log(quiz);
  //   return null;

  //   return addQuiz(quiz).then(newQuiz => {
  //     const quizId = newQuiz.payload.quiz.id;
  //     chosenQuiz(quizId);
  //   });
  // }

  addQuiz = quiz => {
    this.props.addQuiz(quiz);
  };

  render() {
    const { quiz } = this.props;
    console.log(this.props);
    return (
      <div>
        <QuizForm onSubmit={this.addQuiz} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    quiz: state.quiz
  };
};

export default connect(
  mapStateToProps,
  { addQuiz }
)(CreateQuiz);
