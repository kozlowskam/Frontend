import React, { PureComponent } from "react";
import Paper from "@material-ui/core/Paper";
//import "../App.css";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
//import AccountCircle from '@material-ui/icons/AccountCircle';
import Icon from "@material-ui/core/Icon";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import Button from "@material-ui/core/Button";

class QuestionForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};

    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      question: "",
      initialValues: "",
      A: "",
      B: "",
      C: "",
      D: "",
      selectedValue: ""
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

    const gridStyle = {
      display: "flex",
      justifyContent: "center"
    };

    return (
      <div>
        <Paper className="styles" elevation={4}>
          <form onSubmit={this.handleSubmit}>
            <div>
              <TextField
                label="Type your question"
                name="question"
                id="question"
                helperText="Just be creative!"
                value={this.state.question || initialValues.question || ""}
                onChange={this.handleChange}
              />
            </div>
            <br />
            <div>
              <Grid
                container
                spacing={8}
                alignItems="flex-end"
                style={gridStyle}
              >
                <Grid item>
                  <Icon>A</Icon>
                </Grid>
                <Grid item>
                  <TextField
                    label="First answer"
                    name="A"
                    value={this.state.A || initialValues.A || ""}
                    onChange={this.handleChange}
                  />
                </Grid>
              </Grid>
            </div>

            <div>
              <Grid
                container
                spacing={8}
                alignItems="flex-end"
                style={gridStyle}
              >
                <Grid item>
                  <Icon>B</Icon>
                </Grid>
                <Grid item>
                  <TextField
                    label="Second answer"
                    name="B"
                    value={this.state.B || initialValues.B || ""}
                    onChange={this.handleChange}
                  />
                </Grid>
              </Grid>
            </div>

            <div>
              <Grid
                container
                spacing={8}
                alignItems="flex-end"
                style={gridStyle}
              >
                <Grid item>
                  <Icon>C</Icon>
                </Grid>
                <Grid item>
                  <TextField
                    label="Third answer"
                    name="C"
                    value={this.state.C || initialValues.C || ""}
                    onChange={this.handleChange}
                  />
                </Grid>
              </Grid>
            </div>

            <div>
              <Grid
                container
                spacing={8}
                alignItems="flex-end"
                style={gridStyle}
              >
                <Grid item>
                  <Icon>D</Icon>
                </Grid>
                <Grid item>
                  <TextField
                    label="Fourth answer"
                    name="D"
                    value={this.state.D || initialValues.D || ""}
                    onChange={this.handleChange}
                  />
                </Grid>
              </Grid>
            </div>
            <br />
            <br />
            <div>
              <FormLabel component="legend">Correct Answer</FormLabel>
              <FormControlLabel
                value="A"
                name="correctAnswer"
                control={<Radio />}
                label="Answer A"
                checked={this.state.selectedValue === "A"}
                onChange={this.handleChange}
              />
              <FormControlLabel
                value="B"
                name="correctAnswer"
                control={<Radio />}
                label="Answer B"
                checked={this.state.selectedValue === "B"}
                onChange={this.handleChange}
              />
              <FormControlLabel
                value="C"
                name="correctAnswer"
                control={<Radio />}
                label="Answer C"
                checked={this.state.selectedValue === "C"}
                onChange={this.handleChange}
              />
              <FormControlLabel
                value="D"
                name="correctAnswer"
                control={<Radio />}
                label="Answer D"
                checked={this.state.selectedValue === "D"}
                onChange={this.handleChange}
              />
            </div>

            <Button
              type="submit"
              variant="contained"
              component="span"
              color="primary"
            >
              Save
            </Button>
          </form>
        </Paper>
      </div>
    );
  }
}

export default QuestionForm;
