import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
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
        <Paper className="styles" elevation={4}>
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
                      className="link"
                      to={`/quizzes/${quiz.id}`}
                      onClick={() => this.fetchQuiz(quiz.id)}
                    >
                      {quiz.title}
                    </Link>
                  </td>
                  <td>
                    <Button
                      className="deleteButton"
                      onClick={() => this.deleteQuiz(quiz.id)}
                    >
                      Delete
                    </Button>
                    <Link to={`/quizzes/${quiz.id}/results`}>
                      <Button onClick={() => this.fetchResults(quiz.id)}>
                        Check Results
                      </Button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <Button
            className="createQuizButton"
            href={"/createquiz"}
            target="_blank"
          >
            Create a new quiz!
          </Button>
        </Paper>
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
