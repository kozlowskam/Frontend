import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addQuiz } from "../actions/quiz";
import Button from '@material-ui/core/Button'
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
      <Button onClick={this.addQuizClick} className="CreateQuizButton">
        {" "}
        SAVE QUIZ{" "}
      </Button>
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
