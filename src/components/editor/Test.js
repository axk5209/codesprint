import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
		width: "80%",
      }
    }
  })
);

export default function MultilineTextFields(props) {
  const classes = useStyles();
	const onChange = (event) => {
		const updatedTest = {...props.test}
		updatedTest[event.target.name] = event.target.value
		props.setTests(prevTests => prevTests.map(test => test.index === props.test.index ? updatedTest : test))
	}
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField label="Input" multiline rows={5} variant="outlined" style = {{textAlign: "center"}} value = {props.test.input} onChange = {onChange} name = "input"/>
		<br></br>
		<br></br>
        <TextField label="Expected Output" multiline rows={5} variant="outlined"  style = {{textAlign: "center"}} value = {props.test.expectedOutput} onChange = {onChange} name = "expectedOutput"/>
      </div>
    </form>
  );
}
