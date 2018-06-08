import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Quiz } from "../lib/data.js";
import { Quiz2 } from "../lib/data.js";
import { takeQuiz } from "../actions/takequiz";
//test

const answer = [];

class TakeQuiz extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState(
      {
        userAnswer: event.target.value,
        id: Number(event.target.name) + 1
      },
      function() {
        answer.push(this.state);
        console.log(this.state);
      }.bind(this)
    );
  }
  handleSubmit(event) {
    this.props.takeQuiz(answer);
    console.log(answer, "__");

    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {Quiz2.questions.map((quetion, i) => (
          <div>
            {quetion.question} <br />
            <input
              name={i}
              type="radio"
              value="A"
              onChange={this.handleInputChange}
            />
            {
              //{"userAnswer":"b","id":3}
            }
            {quetion.A} <br />
            <input
              name={i}
              type="radio"
              value={"B"}
              onChange={this.handleInputChange}
            />
            {quetion.B} <br />
            <input
              name={i}
              type="radio"
              value={"C"}
              onChange={this.handleInputChange}
            />
            {quetion.C} <br />
            <input
              name={i}
              type="radio"
              value={"D"}
              onChange={this.handleInputChange}
            />
            {quetion.D} <br />
            <br />
          </div>
        ))}

        <input type="submit" value="Submit" />
      </form>
    );
  }
}
const mapStateToProps = function(state) {
  return {
    quizzes: state.quizzes
  };
};

export default connect(
  mapStateToProps,
  {
    takeQuiz
  }
)(TakeQuiz);

//send to zusi
// {1:“a”} and now it is {userAnswer:“a”, id:“1”}
// [{"userAnswer":"B","id":1},{"userAnswer":"A","id":2},{"userAnswer":"B","id":3}]

// function search(nameKey, myArray){
//   for (var i=0; i < myArray.length; i++) {
//       if (myArray[i].name === nameKey) {
//           return myArray[i];
//       }
//   }
// }

// var array = [
//   { name:"string 1", value:"this", other: "that" },
//   { name:"string 2", value:"this", other: "that" }
// ];

// var resultObject = search("string 1", array);

///Users/fong/code/week7GroupsProject/mss/Frontend/src/components/CreateQuiz.js
