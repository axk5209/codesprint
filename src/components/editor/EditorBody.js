import React, { useEffect, useState } from 'react';
import { Container, Typography, FormControl, MenuItem, Select, Button, InputLabel, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import AceBox from "./AceBox";
import Tests from "./Tests"
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	subHeaderText: {
		color: "#690e0e",
	},
	formControl: {
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing(2)
	}
}));

export default function EditorBody() {
	const classes = useStyles()
	const languages = ["java", "c++", "python", "javascript"]
	const initialCodeValues = ['import java.util.Scanner;  // Import the Scanner class\n' +
    '\n' +
    'class Main {\n' +
    '  public static void main(String[] args) {\n' +
    '    Scanner myObj = new Scanner(System.in);  // Create a Scanner object\n' +
    '    System.out.println("Enter username");\n' +
    '\n' +
    '    String userName = myObj.nextLine();  // Read user input\n' +
    '    System.out.println("Username is: " + userName);  // Output user input\n' +
    '  }\n' +
    '}', "", "", "", ""]
	const [language, setLanguage] = useState(0)
	const [codeValue, setCodeValue] = useState(initialCodeValues[0])
	const [tests, setTests] = useState([
		{ index: 0, input: '', expectedOuput: '' },
		{ index: 1, input: '', expectedOuput: '' },
		{ index: 2, input: '', expectedOuput: '' },
		{ index: 3, input: '', expectedOuput: '' },
		{ index: 4, input: '', expectedOuput: '' },
		{ index: 5, input: '', expectedOuput: '' },
		{ index: 6, input: '', expectedOuput: '' },
		{ index: 7, input: '', expectedOuput: '' },
		{ index: 8, input: '', expectedOuput: '' },
		{ index: 9, input: '', expectedOuput: '' },
	])
	function updateValue(newCodeValue) {
		setCodeValue(newCodeValue)
	}
	const handleChange = event => {
		setLanguage(event.target.value);
		updateValue(initialCodeValues[event.target.value])
	};
	const onChange = newCodeValue => {
		updateValue(newCodeValue)
	};

	const onRun = async () => {
		console.log(tests)
		console.log({codeValue})
		const body = {
			"source_code": codeValue,
			"stdin": "world",
			"language": languages[language]
		}
		const body2 = {
			"source_code": codeValue,
			"stdin": "world2",
			"language": languages[language]
		}
		const body3 = {
			"source_code": codeValue,
			"stdin": "world3",
			"language": languages[language]
		}
		const body4 = {
			"source_code": codeValue,
			"stdin": "world3",
			"language": languages[language]
		}

		const postResponse = await axios.post("http://localhost:3001/api/compile", body)
		const postResponse2 = await axios.post("http://localhost:3001/api/compile", body2)
		const postResponse3 = await axios.post("http://localhost:3001/api/compile", body3)
		const postResponse4 = await axios.post("http://localhost:3001/api/compile", body4)

		const token = postResponse.data
		const token2 = postResponse2.data
		const token3 = postResponse3.data
		const token4 = postResponse4.data

		const result = axios.get(`http://localhost:3001/api/${token}`, { token })
		const result2 = axios.get(`http://localhost:3001/api/${token2}`, { token2 })
		const result3 = axios.get(`http://localhost:3001/api/${token3}`, { token })
		const result4 = axios.get(`http://localhost:3001/api/${token4}`, { token2 })
		Promise.all([result, result2, result3, result4]).then(results => {
			console.log(results[0])
			console.log(results[1])
			console.log(results[2])
			console.log(results[3])
		})
	}

	// console.log(language)
	// console.log(initialCodeValues[language])
	// console.log(codeValue)

	return (
		<div>
			<Container align="center">


				<br></br>

				<Typography variant="h4" className={classes.subHeaderText}>Focused Competetive Coding Editor</Typography>
				<br></br>
				<FormControl variant="outlined" className={classes.formControl}>
					<Select
						id="language-choice-form"
						value={language}
						onChange={handleChange}
					>
						<MenuItem value={0}>Java</MenuItem>
						<MenuItem value={1}>C++</MenuItem>
						<MenuItem value={2}>Python</MenuItem>
						<MenuItem value={3}>Javascript</MenuItem>
					</Select>
				</FormControl>
				<br></br>
				<br></br>
				<AceBox mode={languages[language].toLowerCase()} onChange={onChange} codeValue={codeValue} />
				<br></br>
				<Button size="large" variant="contained" onClick={onRun} style={{ color: "#ffffff", backgroundColor: "#9c5a5a", fontWeight: "bold" }}>Run</Button>
				<br></br>
				<br></br>
				<br></br>
				<Tests tests={tests} setTests={setTests}></Tests>
			</Container>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
		</div>
	)
}