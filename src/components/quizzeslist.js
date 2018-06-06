import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { fetchAllQuizzes, deleteQuiz } from '../actions/quizzes'

class QuizzesList extends PureComponent {
    static propTypes = {
      quizes: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })).isRequired
    }

    componentWillMount() {
      this.props.fetchAllQuizzes()
    }
  
    deleteQuiz(quizId) {
        this.props.deleteQuiz(quizId)
    }

    render() {
      const {quizzes} = this.props
      return (
        <div>
          <h1>Welcome to TypeQuiz</h1>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              { quizzes.map(quiz => (<tr key={quiz.id}>
                <td>{quiz.id}</td>
                <td>
                    <Link to={ `/quizzes/${quiz.id}` }>{quiz.title}</Link>
                </td>
                <td><button onClick={ () => this.deleteQuiz(quiz.id) }>Delete</button></td>
              </tr>)) }
            </tbody>
        </table>
        
        <Link to={ '/createquiz'} target="_blank">Create a new quiz!</Link>
        </div>
      )
    }
  }
  
  
  const mapStateToProps = function (state) {
    return {
      quizzes: state.quizzes
    }
  }
  
  export default connect(mapStateToProps, {
    fetchAllQuizzes,
    deleteQuiz
  })(QuizzesList)
  