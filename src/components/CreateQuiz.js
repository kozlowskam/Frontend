import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addQuiz } from "../actions/quiz";
import { Link } from "react-router-dom";
import QuestionForm from "./QuestionForm";
import QuizForm from "./QuizForm";

export class CreateQuiz extends PureComponent {
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
