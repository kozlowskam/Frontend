import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { fetchAllQuizes } from '../actions/quizes'

class QuizesList extends PureComponent {
    static propTypes = {
      quizes: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })).isRequired
    }

    componentWillMount() {
      this.props.fetchAllQuizes()
    }
  
    render() {
      const {quizes} = this.props
      return (
        <div>
          <h1>All quizes</h1>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              { quizes.map(quiz => (<tr key={quiz.id}>
                <td>{quiz.id}</td>
                <td>{quiz.title}</td>
              </tr>)) }
            </tbody>
        </table>
        </div>
      )
    }
  }
  
  const mapStateToProps = function (state) {
    return {
      quizes: state.quizes
    }
  }
  
  export default connect(mapStateToProps, {
    fetchAllQuizes
  })(QuizesList)
  