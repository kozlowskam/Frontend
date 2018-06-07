import React, { PureComponent } from "react";
import Paper from '@material-ui/core/Paper';
//import "../App.css";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
//import AccountCircle from '@material-ui/icons/AccountCircle';
import Icon from '@material-ui/core/Icon';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';



class QuestionForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};

    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  handleChange = event => {

    const { name , value } = event.target;


   this.setState ({
     [name]: value,
     selectedValue: event.target.value
})
   

  };

  render() {
    const initialValues = this.props.initialValues || {};
    
    const gridStyle = {
      display: 'flex',
      justifyContent: 'center',
    }

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
        <Grid container spacing={8} alignItems="flex-end" style={gridStyle}>
          <Grid item>
          <Icon>A</Icon>
          </Grid>
          <Grid item>
          <TextField
          className="Field1"
          label="First answer here"
          name="answer_a"
          value={this.state.answer_a || initialValues.answer_a || ""}
          onChange={this.handleChange}
        />
          </Grid>
        </Grid>
        </div>

        <div>
        <Grid container spacing={8} alignItems="flex-end" style={gridStyle}>
          <Grid item>
          <Icon>B</Icon>
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
        <Grid container spacing={8} alignItems="flex-end" style={gridStyle}>
          <Grid item>
          <Icon>C</Icon>
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
        <Grid  container spacing={8} alignItems="flex-end" style={gridStyle}>
          <Grid item>
          <Icon>D</Icon>
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
        <br/>

        <div>
        <FormLabel component="legend">Correct Answer</FormLabel>
              <FormControlLabel value="answer_a" name="correct_answer" control={<Radio />} label="Answer A" checked={this.state.selectedValue === 'answer_a'} 
                  onChange={this.handleChange}/>
              <FormControlLabel value="answer_b" name="correct_answer"control={<Radio />} label="Answer B" checked={this.state.selectedValue ==='answer_b'}
                  onChange={this.handleChange}/>
              <FormControlLabel value="answer_c" name="correct_answer" control={<Radio />} label="Answer C" checked={this.state.selectedValue === 'answer_c'} 
                  onChange={this.handleChange}/>
              <FormControlLabel value="answer_d" name="correct_answer" control={<Radio />} label="Answer D" checked={this.state.selectedValue === 'answer_d'} 
                  onChange={this.handleChange}/>
        </div>

        <Button type="submit"variant="contained" component="span" color="primary">Save</Button>
      </form>
      </Paper>

      </div>
    );
  }
}

export default QuestionForm;
