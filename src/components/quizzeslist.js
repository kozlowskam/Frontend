import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchAllQuizzes,
  deleteQuiz,
  fetchQuiz,
  fetchResults
} from "../actions/quizzes";

class QuizzesList extends PureComponent {
  static propTypes = {
    quizzes: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired
      })
    ).isRequired
  };

  componentWillMount() {
    this.props.fetchAllQuizzes();
  }

  deleteQuiz(quizId) {
    this.props.deleteQuiz(quizId);
  }

  fetchQuiz(quizId) {
    this.props.fetchQuiz(quizId);
  }

  fetchResults(quizId) {
    this.props.fetchResults(quizId);
  }

  render() {
    const { quizzes } = this.props;

    const OrderedQuizzes = quizzes.sort(function(a, b) {
      return a.id - b.id;
    });

    return (
      <div>
        <h1>Welcome to TypeQuiz</h1>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {OrderedQuizzes.map(quiz => (
              <tr key={quiz.id}>
                <td>{quiz.id}</td>
                <td>
                  <Link
                    to={`/quizzes/${quiz.id}`}
                    onClick={() => this.fetchQuiz(quiz.id)}
                  >
                    {quiz.title}
                  </Link>
                </td>
                <td>
                  <button onClick={() => this.deleteQuiz(quiz.id)}>
                    Delete
                  </button>
                  <Link to={`/quizzes/${quiz.id}/results`}>
                    <button onClick={() => this.fetchResults(quiz.id)}>
                      Check Results
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Link to={"/createquiz"} target="_blank">
          Create a new quiz!
        </Link>
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    quizzes: state.quizzes,
    quiz: state.quiz
  };
};

export default connect(
  mapStateToProps,
  {
    fetchAllQuizzes,
    deleteQuiz,
    fetchResults,
    fetchQuiz
  }
)(QuizzesList);
