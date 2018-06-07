import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addQuestion } from "../actions/questions";
import { Link } from "react-router-dom";
import QuestionForm from "./QuestionForm";
import QuizForm from "./QuizForm";

class QuestionList extends PureComponent {
  /*   static propTypes = {
    questions: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        question: PropTypes.string.isRequired,
        a: PropTypes.string.isRequired,
        b: PropTypes.string.isRequired,
        c: PropTypes.string.isRequired,
        d: PropTypes.string.isRequired,
        correct_answer: PropTypes.string.isRequired
      })
    ).isRequired
  };
 */

  addQuiz = quiz => {
    this.props.addQuiz(quiz);
  };

  addQuestion = question => {
    let lastQuiz = { ...this.props.quizzes[this.props.quizzes.length - 1] };

    question = { ...question, quiz: lastQuiz.id };
    this.props.addQuestion(question);
  };

  render() {
    const { questions, quiz } = this.props;
    console.log(this.props);
    return (
      <div>
        <h2> Create your questions </h2>
        <QuizForm onSubmit={this.addQuiz} />
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Question</th>
              <th>Answers</th>
              <th>Correct Answer</th>
            </tr>
          </thead>
          <tbody>
            {questions.map(item => (
              <tr key={item.index}>
                <td>{item.question}</td>
                <td>{item.answer_a}</td>
                <td>{item.answer_b}</td>
                <td>{item.answer_c}</td>
                <td>{item.answer_d}</td>
                <td>{item.correct_answer}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h1>Create a new question </h1>
        <QuestionForm onSubmit={this.addQuestion} />
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    questions: state.questions,
    quiz: state.quiz
  };
};

export default connect(
  mapStateToProps,
  {
    addQuestion
  }
)(QuestionList);
