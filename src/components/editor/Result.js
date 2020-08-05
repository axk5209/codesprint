import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) =>
	({
		root: {
			"& .MuiTextField-root": {
				margin: theme.spacing(1),
				width: "80%",
			}
		},
		output: {
			// backgroundColor: "#000000",
			borderColor: "#000000",

			textColor: "#ffffff",
			textAlign: "center"
		}
	})
);

export default function MultilineTextFields(props) {
	const classes = useStyles();
	console.log(props)
	if (!props.result)
	{	
		return (
			<form className={classes.root} noValidate autoComplete="off">
				<br></br>
				<br></br>
				<div>
					<br></br>
					<br></br>
					<br></br>
					<br></br>
					<br></br>
					<br></br>
					<Typography variant = "h6">You did not enter an expected output for this test.</Typography>
					<br></br>
					<br></br>
					<br></br>
					<br></br>
					<br></br>
					<br></br>
					<br></br>
					<br></br>
				</div>
			</form>
		)
	}
	else if (props.result.result.status.description === "Compilation Error")
	{
		return (
			<form className={classes.root} noValidate autoComplete="off">
				<br></br>
				<div>
					<Typography variant = "h5">Compilation Error</Typography>
					<br></br>
					<TextField multiline rows={12} variant="outlined" disabled className = {classes.output} value={props.result.result.compile_output} />
					<br></br>
					<br></br>
				</div>
			</form>
		);
	}
	else 
	{
		return (
			<form className={classes.root} noValidate autoComplete="off">
				<br></br>
				<br></br>
				<div>
					<TextField label="Expected Output" multiline rows={5} variant="outlined" disabled className = {classes.output} value={props.result.expectedOutput} />
					<br></br>
					<br></br>
					<TextField label="Received Output" multiline rows={5} variant="outlined" disabled className = {classes.output} value={props.result.result.stdout} />
				</div>
			</form>
		);
	}
}

/*
import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import {List, ListItem, Divider, ListItemText, Container} from "@material-ui/core";

const useStyles = makeStyles((theme) =>
	createStyles({
		root: {
			"& .MuiTextField-root": {
				width: "80%",
			}
		}
	})
);

export default function MultilineTextFields(props) {
	const classes = useStyles();

	return (
			<div className={classes.root}>
				<Container align = "center">
					<List>
						<ListItem>
							<ListItemText primary="Expected Output" secondary={props.result.expectedOutput} style={{ wordWrap: "break-word", whiteSpace: 'pre-line' }} />
						</ListItem>
						<br></br>
						<ListItem>
							<ListItemText primary="Received Output" secondary={props.result.receivedOutput} style={{ wordWrap: "break-word", whiteSpace: 'pre-line' }} />
						</ListItem>
					</List>
				</Container>
			</div>
	);
}
*/