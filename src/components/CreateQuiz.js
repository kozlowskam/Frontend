import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addQuiz } from "../actions/quiz";
import { addQuestion } from "../actions/questions";
import { Link } from "react-router-dom";
import { fetchAllQuizzes } from "../actions/quizzes";
import QuestionForm from "./QuestionForm";
import QuizForm from "./QuizForm";

export class CreateQuiz extends PureComponent {
  componentWillMount() {
    this.props.fetchAllQuizzes();
  }

  addQuiz = quiz => {
    this.props.addQuiz(quiz);
  };

  addQuestion = question => {
    let lastQuiz = { ...this.props.quizzes[this.props.quizzes.length - 1] };
    console.log(this.props.quizzes.length);
    question = { ...question, quiz: lastQuiz.id };
    this.props.addQuestion(question);
  };

  render() {
    const { questions, quiz, quizzes } = this.props;

    return (
      <div>
        <h2> Create your quiz </h2>
        <QuizForm onSubmit={this.addQuiz} />
        <br />
        <QuestionForm onSubmit={this.addQuestion} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    quiz: state.quiz,
    questions: state.questions,
    quizzes: state.quizzes
  };
};

export default connect(
  mapStateToProps,
  {
    addQuiz,
    fetchAllQuizzes,
    addQuestion
  }
)(CreateQuiz);
