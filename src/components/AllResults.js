import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";


class AllResults extends PureComponent {
    
    render() {  
    const {allResults} = this.props

        
      return (
          
        <div>
        <h1>Quiz Results</h1>
        <table>
          <thead>
            <tr>
              <th>UserID</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            { allResults.map(result => (<tr key={result.userId}>
              <td>{result.userId}</td>
              <td>{result.score}</td>
            </tr>
          ))}
        </tbody>
        </table>
        </div>
      )}}
    
 
  const mapStateToProps = state => {
      console.log(state.allResults, "zsuzsi")
      return {
          allResults: state.allResults
      }
  }


  
  export default connect(mapStateToProps)(AllResults)

