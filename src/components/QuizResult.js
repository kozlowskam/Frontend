import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";


class QuizResult extends PureComponent {
    quizResult
    render() {  
    const {quizResult} = this.props
        
      return (
        <div>
            You scored: {quizResult}
            <Link to={"/quizzes"}> Home </Link>
        </div>
      );
    }
  }

  const mapStateToProps = state => {
      return {
          quizResult: state.quizResult
      }
  }
  
  export default connect(mapStateToProps)(QuizResult)