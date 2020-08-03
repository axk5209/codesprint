import React, { useEffect } from 'react';
import { Container, Typography, FormControl, MenuItem, Select, withStyles, InputBase, Button} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import AceBox from "./AceBox";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const languages = ["Java", "C++", "C", "Python", "Javascript"]
const codeValues = [`class Hello {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello Java!"); // Display the string.\n\t}\n}`, "", "", "", ""]

const useStyles = makeStyles(() => ({
	root: {
		flexGrow: 1,
	},
	subHeaderText: {
		color: "#690e0e",
	},
}));

const BootstrapInput = withStyles(theme => ({
	root: {
		"label + &": {
			marginTop: theme.spacing(3)
		}
	},
	input: {
		borderRadius: 4,
		position: "relative",
		backgroundColor: theme.palette.background.paper,
		border: "1px solid #ced4da",
		fontSize: 16,
		padding: "10px 26px 10px 12px",
		transition: theme.transitions.create(["border-color", "box-shadow"]),
		// Use the system font instead of the default Roboto font.
		fontFamily: [
			"-apple-system",
			"BlinkMacSystemFont",
			'"Segoe UI"',
			"Roboto",
			'"Helvetica Neue"',
			"Arial",
			"sans-serif",
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"'
		].join(","),
		"&:focus": {
			borderRadius: 4,
			borderColor: "#80bdff",
			boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
		}
	}
}))(InputBase);

export default function EditorBody() {
	const classes = useStyles()
	const [view, setView] = React.useState(0);

	useEffect(() => {
		console.log("happening")
	}, [])

	const handleChange = event => {
		setView(event.target.value);
	};

	return (
		<div>
			<Container align="center">


				<br></br>

				<Typography variant="h4" className={classes.subHeaderText}>Focused Competetive Coding Editor</Typography>
				<br></br>
				<FormControl>
					<Select
						labelId="demo-customized-select-label"
						id="demo-customized-select"
						value={view}
						onChange={handleChange}
						input={<BootstrapInput />}
					>
						<MenuItem value={0}>Java</MenuItem>
						<MenuItem value={1}>C++</MenuItem>
						<MenuItem value={2}>C</MenuItem>
						<MenuItem value={3}>Python</MenuItem>
						<MenuItem value={4}>Javascript</MenuItem>
					</Select>
				</FormControl>
				<br></br>
				<br></br>
				<AceBox mode = {languages[view].toLowerCase()} initialCodeValue ={codeValues[view]}/>
				<br></br>
				<Button size = "large" variant = "contained">Run</Button>
				{
					/*
						React Tabs - Test Cases: Input and Expected Output
					*/
				}
			</Container>
			<br></br>
			<br></br>
		</div>
	)
}