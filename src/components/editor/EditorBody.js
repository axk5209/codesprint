import React, { useEffect, useState } from 'react';
import { Container, Typography, FormControl, MenuItem, Select, Button, InputLabel, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import AceBox from "./AceBox";
import Tests from "./Tests"
import Results from "./Results"
import axios from 'axios'
import CircularProgress from '@material-ui/core/CircularProgress';

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
    '    System.out.println("Username is: " +22 userName);  // Output user input\n' +
    '  }\n' +
    '}', "", "", "", ""]
	const [language, setLanguage] = useState(0)
	const [codeValue, setCodeValue] = useState(initialCodeValues[0])
	const [tests, setTests] = useState([
		{ index: 0, input: '1', expectedOutput: '1' },
		{ index: 1, input: '2', expectedOutput: '2' },
		{ index: 2, input: '', expectedOutput: '' },
		{ index: 3, input: '4', expectedOutput: '4' },
		{ index: 4, input: '', expectedOutput: '' },
		{ index: 5, input: '', expectedOutput: '' },
		{ index: 6, input: '', expectedOutput: '' },
		{ index: 7, input: '', expectedOutput: '' },
		{ index: 8, input: '', expectedOutput: '' },
		{ index: 9, input: '', expectedOutput: '' },
	])

	const [results, setResults] = useState([
		// { index: 0, expectedOutput: '123', receivedOutput: '113' },
		// { index: 1, expectedOutput: '234', receivedOutput: '234' },
		// { index: 2, expectedOutput: '', receivedOutput: '' },
		// { index: 3, expectedOutput: '4555', receivedOutput: '46' },
		// { index: 4, expectedOutput: '', receivedOutput: '' },
		// { index: 5, expectedOutput: '', receivedOutput: '' },
		// { index: 6, expectedOutput: '', receivedOutput: '' },
		// { index: 7, expectedOutput: '', receivedOutput: '' },
		// { index: 8, expectedOutput: '', receivedOutput: '' },
		// { index: 9, expectedOutput: '', receivedOutput: '' },
	])

	const [loading, setLoading] = useState(false)
	const [loaded, setLoaded] = useState(false)
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
		setLoading(true)
		console.log(tests)
		console.log({codeValue})


		const filteredTests = tests.filter(test => test.expectedOutput !== '')
		console.log(filteredTests)
		const bodies = filteredTests.map(test => ({
			"source_code": codeValue,
			"stdin": test.input,
			"language": languages[language],
			index: test.index
		}))

		console.log(bodies)
		const postResponses = []
		for (let i = 0; i < bodies.length; i++)
		{
			const postResponse = await axios.post("http://localhost:3001/api/compile", bodies[i])
			postResponses[i] = {postResponse, index: bodies[i].index}
		}

		
		console.log(postResponses)

		const tokens = postResponses.map(responseObject => ({token: responseObject.postResponse.data, index: responseObject.index}))
		console.log(tokens)

		const submissionObjects = tokens.map(tokenObject => {
			console.log(tokenObject)
			const submission = axios.get(`http://localhost:3001/api/${tokenObject.token}`, {token: tokenObject.token})
			return {submission, index: tokenObject.index}
		})
			
			
		// const submissions = submissionObjects.map(submissionObject => submissionObject.submission)

		const submissions = []
		for (let i = 0; i < 10; i++)
		{
			submissions[i] = Promise.resolve(null);
		}
	
		for (let i = 0; i < submissionObjects.length; i++)
		{
			submissions[submissionObjects[i].index] = submissionObjects[i].submission
		}
		console.log(submissions)
		Promise.all(submissions).then(results => {
			console.log(results)
			const newResults = results.map((result, index) => (result ? {result: result.data, expectedOutput: tests[index].expectedOutput} : null))
			setResults(newResults)
			console.log(newResults)
			setLoading(false)
			setLoaded(true)
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
				<br></br>
				{
					!loading && 
					<Button size="large" variant="contained" onClick={onRun} style={{ color: "#ffffff", backgroundColor: "#9c5a5a", fontWeight: "bold" }}>Run</Button>
				}
				{
					loading && 
					<>
						<CircularProgress color="secondary" size = {60}/>
					</>
				}
				<br></br>
				<br></br>
				<br></br>
				<Tests tests={tests} setTests={setTests}></Tests>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				{loaded && <Results results = {results}></Results>}
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