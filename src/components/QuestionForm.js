import React, { PureComponent } from "react";
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import "../App.css";




class QuestionForm extends PureComponent {
  state = {};

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    const initialValues = this.props.initialValues || {};

    return (
    <div>      
      <Paper className="styles" elevation={4}>
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="question">Question</label>
          <input
            name="question"
            id="question"
            value={this.state.question || initialValues.question || ""}
            onChange={this.handleChange}
          />
        </div>

        <div>
          <label htmlFor="a">Answer A</label>
          <input
            name="a"
            id="a"
            value={this.state.a || initialValues.a || ""}
            onChange={this.handleChange}
          />
        </div>

        <div>
          <label htmlFor="b">Answer B</label>
          <input
            name="b"
            id="b"
            value={this.state.b || initialValues.b || ""}
            onChange={this.handleChange}
          />
        </div>

        <div>
          <label htmlFor="c">Answer C</label>
          <input
            name="c"
            id="c"
            value={this.state.c || initialValues.c || ""}
            onChange={this.handleChange}
          />
        </div>

        <div>
          <label htmlFor="d">Answer D</label>
          <input
            name="d"
            id="d"
            value={this.state.d || initialValues.d || ""}
            onChange={this.handleChange}
          />
        </div>

        <div>
          <label htmlFor="correct_answer">Correct Answer</label>
          <input
            name="correct_answer"
            id="correct_answer"
            value={
              this.state.correct_answer || initialValues.correct_answer || ""
            }
            onChange={this.handleChange}
          />
        </div>

        <button type="submit">Save</button>
      </form>
      </Paper>
      </div>
    );
  }
}

export default QuestionForm;
