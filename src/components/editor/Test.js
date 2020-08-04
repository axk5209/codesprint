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

export default function MultilineTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField label="Input" multiline rows={5} variant="outlined" style = {{textAlign: "center"}}/>
		<br></br>
		<br></br>
        <TextField label="Expected Output" multiline rows={5} variant="outlined"  style = {{textAlign: "center"}} />
      </div>
    </form>
  );
}
