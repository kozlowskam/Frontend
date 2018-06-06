import React, { PureComponent } from "react";
import Paper from '@material-ui/core/Paper';
import "../App.css";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';





class QuestionForm extends PureComponent {
  constructor(props) {
    super(props)
  
  this.state = {};

  this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  handleChange = event => {
<<<<<<< HEAD
    const { name , value } = event.target;
    
=======
    const { name, value } = event.target;

>>>>>>> 6bfc517ad7bda48ca0e77f97be34917a8a8dc060
   this.setState ({
     [name]: value,
     selectedValue: event.target.value
})
   
   
  };

  render() {
    const initialValues = this.props.initialValues || {};

    return (
    <div>      
      <Paper className="styles" elevation={4}>
      <form onSubmit={this.handleSubmit}>
        <div>
          <TextField
          label="Type your question here"
          name="question"
          id="question"
          helperText="Just be creative!"
          value={this.state.question || initialValues.question || ""}
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
          label="First answer here"
          name="answer_a"
          value={this.state.answer_a || initialValues.answer_a || ""}
          onChange={this.handleChange}
        />
          </Grid>
        </Grid>
        </div>

        <div>
        <Grid container spacing={8} alignItems="flex-end">
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
          <TextField
          label="Second answer here"
          name="answer_b"
          value={this.state.answer_b || initialValues.answer_b || ""}
          onChange={this.handleChange}
        />
          </Grid>
        </Grid>
        </div>

        <div>
        <Grid container spacing={8} alignItems="flex-end">
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
          <TextField
          label="Third answer here"
          name="answer_c"
          value={this.state.answer_c || initialValues.answer_c || ""}
          onChange={this.handleChange}
        />
          </Grid>
        </Grid>
        </div>

        <div>
        <Grid container spacing={8} alignItems="flex-end">
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
          <TextField
          label="Fourth answer here"
          name="answer_d"
          value={this.state.answer_d || initialValues.answer_d || ""}
          onChange={this.handleChange}
        />
          </Grid>
        </Grid>
        </div>

        <div>
        <FormLabel component="legend">Correct Answer</FormLabel>
              <FormControlLabel value="answer_a" name="correct_answer" control={<Radio />} label="Answer A" checked={this.state.selectedValue === 'answer_a'} 
                  onChange={this.handleChange}/>
<<<<<<< HEAD
              <FormControlLabel value="answer_b" name="correct_answer"control={<Radio />} label="Answer B" checked={this.state.selectedValue ==='answer_b'} 
=======
              <FormControlLabel value="answer_b" name="correct_answer" control={<Radio />} label="Answer B" checked={this.state.selectedValue === 'answer_b'} 
>>>>>>> 6bfc517ad7bda48ca0e77f97be34917a8a8dc060
                  onChange={this.handleChange}/>
              <FormControlLabel value="answer_c" name="correct_answer" control={<Radio />} label="Answer C" checked={this.state.selectedValue === 'answer_c'} 
                  onChange={this.handleChange}/>
              <FormControlLabel value="answer_d" name="correct_answer" control={<Radio />} label="Answer D" checked={this.state.selectedValue === 'answer_d'} 
                  onChange={this.handleChange}/>

          
        </div>

        <button type="submit">Save</button>
      </form>
      </Paper>
      </div>
    );
  }
}

export default QuestionForm;
