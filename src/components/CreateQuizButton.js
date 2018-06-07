import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addQuiz } from "../actions/quiz";
import "./CreateQuizButton.css";

export class CreateQuizButton extends PureComponent {
  static propTypes = {
    onClick: PropTypes.func.isRequired
  };

  addQuizClick = () => {
    let QuizQuestions = this.props.questions;
    console.log(QuizQuestions);
    this.props.addQuiz(QuizQuestions);
  };

  render() {
    return (
      <button onClick={this.addQuizClick} className="CreateQuizButton">
        {" "}
        SAVE QUIZ{" "}
      </button>
    );
  }
}

const mapStateToProps = state => {
  return {
    questions: state.questions
  };
};

export default connect(
  mapStateToProps,
  { addQuiz }
)(CreateQuizButton);
