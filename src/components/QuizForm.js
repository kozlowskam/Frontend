import React, { PureComponent } from "react";
import Paper from "@material-ui/core/Paper";
import "../App.css";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";

class QuizForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};

    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      title: "",
      webhook: ""
    });
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
      selectedValue: event.target.value
    });
  };

  render() {
    const initialValues = this.props.initialValues || {};

    return (
      <div>
        <Paper className="styles" elevation={4}>
          <form onSubmit={this.handleSubmit}>
            <div>
              <TextField
                label="Quiz title"
                name="title"
                id="title"
                value={this.state.title || initialValues.title || ""}
                onChange={this.handleChange}
              />
            </div>

            <div>
              <Grid container spacing={8} alignItems="flex-end">
                <Grid item>
                  <AccountCircle />
                </Grid>
                <Grid item>
                  <TextField
                    label="webhook"
                    name="webhook"
                    value={this.state.webhook || initialValues.webhook || ""}
                    onChange={this.handleChange}
                  />
                </Grid>
              </Grid>
            </div>

            <button type="submit">Create Quiz</button>
          </form>
        </Paper>
      </div>
    );
  }
}

export default QuizForm;
