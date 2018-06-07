import React, { PureComponent } from "react";
import { connect } from "react-redux";

export class QuizQuestions extends PureComponent {
  getQuiz() {
    let QuizQuestions = this.props.questions;
    console.log(QuizQuestions);
  }

  render() {
    return <div>{QuizQuestions}</div>;
  }
}

const mapStateToProps = state => {
  return {
    questions: state.questions
  };
};

export default connect(mapStateToProps)(QuizQuestions);
