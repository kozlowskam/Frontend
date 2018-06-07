import React, { PureComponent } from "react";
//import { connect } from "react-redux";
import { Quiz } from "../lib/data.js";
import { Quiz2 } from "../lib/data.js";

class TakeQuiz extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      useranswer: "Hi adam!",
      id: "hi Fong!"
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  // state = {
  //   useranswer: "",
  //   id: 1
  // };

  handleInputChange(event) {
    console.log(event.target.value);

    this.setState({
      useranswer: event.target.value,
      id: event.target.name
    });
    console.log(this.state);
  }
  handleSubmit(event) {
    alert("A name was submitted: ");

    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {Quiz2.questions.map((quetion, i) => (
          <div>
            {quetion.question} <br />
            {console.log(i, "test")}
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
export default TakeQuiz;

// export const Quiz2 = {
//   id: 1,
//   questions: [
//     {
//       A: "dsafafds",
//       B: "sadasda",
//       C: "safasfaf",
//       D: "sadafdgfg",
//       correct_answer: "a",
//       id: 1,
//       question: "sadasdasd"
//     },

// {
//   id: 4,
//   quetions: "quetion 4",
//   a: "a Mix it up",
//   b: "b horse",
//   c: "c horse",
//   d: "d rat",
//   correct_answer: "a"
// }

//send to zusi
// {1:“a”} and now it is {userAnswer:“a”, id:“1”}
// [{"userAnswer":"B","id":1},{"userAnswer":"A","id":2},{"userAnswer":"B","id":3}]
