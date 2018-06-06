import React, { PureComponent } from "react";
//import { connect } from "react-redux";
import { Quiz } from "../lib/data.js";

class TakeQuiz extends PureComponent {
  render() {
    return (
      // this.props.data.map()
      <div>
        {Quiz.map((quetions, i) => (
          <div>
            <div key={i}>{quetions.quetions}</div>
            {Object.keys(quetions).map((answer, i) => {
              if (i > 1 && i < 6)
                return (
                  <div>
                    <input
                      name={quetions.quetions}
                      type="radio"
                      value={quetions.a}
                    />
                    {quetions[answer]}
                  </div>
                );
            })}
          </div>
        ))}
      </div>
    );
  }
}
export default TakeQuiz;

// <input
// name="choseBase"
// type="radio"
// value="8.99"
// onChange={this.handleInputChange}
// />25cm NY Style € 8,99<br />

// id: 2,
// quetions: "this is a quetion2",
// a: "Red sauce",
// b: "Mix it up",
// c: "horse",
// d: "rat",
// correct_answer: "a"

//  {console.log(Object.keys(quetions))}

// {
//   console.log(Object.keys(quetions.a));
// }

// {Object.keys(quetions).map((x, i) => {
//   console.log(x[i]);
// })}

// {console.log(quetions)}
// {console.log(Object.keys(quetions), "--")}

// {Object.keys(quetions).map((x, i) => {
//   if (i > 0 && i < 6) console.log(quetions[x]);
// })}

// <br />
// <input name="i" type="radio" value={quetions.a} />
// {quetions.a}
// <br />
// <input name="i" type="radio" value={quetions.b} />
// {quetions.b} <br />
// <input name="i" type="radio" value={quetions.c} />
// {quetions.c} <br />
// <input name="i" type="radio" value={quetions.d} />
// {quetions.d} <br />
// <br />

{
  /* <div>{quetions[x]}</div>; */
}
