import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
// import {fetchAllProducts, createProduct, deleteProduct} from '../actions/products'
// import {Link} from 'react-router-dom'
// import ProductForm from './ProductForm'

class QuizesList extends PureComponent {
    static propTypes = {
      products: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
      })).isRequired
    }
  
    // createQuiz = (quiz) => {
    //   this.props.createQuiz(quiz)
    // }
  
    // deleteQuiz = (quizId) => {
    //   this.props.deleteQuiz(quizId)
    // }
  
    // componentWillMount() {
    //   this.props.fetchAllQuiz()
    // }
  
    render() {
      const {quizes, currentUser} = this.props
      return (
        <div>
          <h1>All quizes</h1>
  
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                {/* <th>Price</th> */}
                <th></th>
              </tr>
            </thead>
            {/* <tbody>
              { quizes.map(quiz => (<tr key={quiz.id}>
                <td>{quiz.id}</td>
                <td>
                  <Link to={ `/quizes/${quiz.id}` }>{quiz.name}</Link>
                </td>
                <td><button onClick={ () => this.deleteQuiz(quiz.id) }>Delete</button></td>
                <td><button onClick={ () => this.takeQuiz(quiz.id) }>Take quiz!</button></td>
              </tr>)) }
            </tbody> */}
        </table>
  
        <h1>Create a new quiz</h1>
  
        {/* { currentUser && <ProductForm onSubmit={this.createProduct} /> }
        { !currentUser && <p>Please <Link to="/login">login</Link></p> } */}
        </div>
      )
    }
  }
  
  const mapStateToProps = function (state) {
    return {
      quizes: state.quizes,
    //   currentUser: state.currentUser
    }
  }
  
  export default connect(mapStateToProps, {
    // fetchAllQuizes,
    // createQuiz,
    // deleteQuiz
  })(QuizesList)
  