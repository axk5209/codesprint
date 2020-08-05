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
	const initialCodeValues = [`class Main {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello Java!"); // Display the string.\n\t}\n}`, "", "", "", ""]
	const [language, setLanguage] = useState(0)
	const [codeValue, setCodeValue] = useState(initialCodeValues[0])

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
		const body = {
			"source_code": codeValue,
			"stdin": "world",
			"language": languages[language]
		}

		// console.log("running")
		// const postResponse = await axios.post("http://localhost:3001/api/compile", body)
		// console.log(postResponse.data)
		// const token = postResponse.data
		// const result = await axios.get(`http://localhost:3001/api/${token}`, {token})
		// console.log(result.data)
		
		// const postResponse2 = await axios.post("http://localhost:3001/api/compile", body)
		// console.log(postResponse2.data)
		// const token2 = postResponse2.data
		// const result2 = await axios.get(`http://localhost:3001/api/${token2}`, {token2})
		// console.log(result2.data)

		const postResponse = await axios.post("http://localhost:3001/api/compile", body)
		const postResponse2 = await axios.post("http://localhost:3001/api/compile", body)
		const postResponse3 = await axios.post("http://localhost:3001/api/compile", body)
		const postResponse4 = await axios.post("http://localhost:3001/api/compile", body)

		const token = postResponse.data
		const token2 = postResponse2.data
		const token3 = postResponse3.data
		const token4 = postResponse4.data

		const result = axios.get(`http://localhost:3001/api/${token}`, {token})
		const result2 = axios.get(`http://localhost:3001/api/${token2}`, {token2})
		const result3 = axios.get(`http://localhost:3001/api/${token3}`, {token})
		const result4 = axios.get(`http://localhost:3001/api/${token4}`, {token2})
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
				<Button size="large" variant="contained" onClick={onRun} style = {{color: "#ffffff", backgroundColor: "#9c5a5a", fontWeight: "bold"}}>Run</Button>
				<br></br>
				<br></br>
				<br></br>
				<Tests></Tests>
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