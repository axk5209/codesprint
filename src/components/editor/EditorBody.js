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
		console.log("running")
		const postResponse = await axios.post("http://localhost:3001/api/compile", body)
		console.log(postResponse.data)
		const token = postResponse.data
		const result = await axios.get(`http://localhost:3001/api/${token}`, {token})
		console.log(result.data)
		// fetch("https://judge0.p.rapidapi.com/submissions", {
		// 	"method": "POST",
		// 	"headers": {
		// 		"x-rapidapi-host": "judge0.p.rapidapi.com",
		// 		"x-rapidapi-key": "9b0f31e01fmsh859f41ecd1db8bap19b89fjsn60e1e45356ff",
		// 		"content-type": "application/json",
		// 		"accept": "application/json"
		// 	},
		// 	"body": {
		// 		"language_id": 50,
		// 		"source_code": "#include <stdio.h>\n\nint main(void) {\n  char name[10];\n  scanf(\"%s\", name);\n  printf(\"hello %s\\n\", name);\n  return 0;\n}",
		// 		"stdin": "world"
		// 	}
		// })
		// 	.then(response => {
		// 		console.log(response);
		// 	})
		// 	.catch(err => {
		// 		console.log(err);
		// 	});
		// const body = {
		// 		"client_secret": "a09873f4450a7c363962c7d72511d17942bcf86f",
		// 		'async': 0,
		// 		'source': `class Hello {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello Java!"); // Display the string.\n\t}\n}`,  //your source code for which you want to use hackerEarth api
		// 		'lang': "JAVA",
		// 		'time_limit': 5,
		// 		'memory_limit': 262144,
		// }
		// try {
		// 	const response = await axios.post("http://api.hackerearth.com/v3/code/compile/", body)
		// 	console.log(response)
		// }
		// catch (error)
		// {
		// 	console.error(error)
		// }
		// let HackerEarth = require('hackerearth-node'); //require the Library
		// //Now set your application 
		// let hackerEarth = new HackerEarth(
		// 	'9ba581c5da8b522f4035cda1679749af98b7e828',  //Your Client Secret Key here this is mandatory
		// 	''  //mode sync=1 or async(optional)=0 or null async is by default and preferred for nodeJS
		// );
		// let config = {};
		// config.time_limit = 1;  //your time limit in integer
		// config.memory_limit = 323244;  //your memory limit in integer
		// config.source = `class Hello {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello Java!"); // Display the string.\n\t}\n}`  //your source code for which you want to use hackerEarth api
		// config.input = "";  //input against which you have to test your source code
		// config.language = "JAVA"; //optional choose any one of them or none

		// //compile your code 
		// //compile your code 
		// hackerEarth.run(config)
		// 	.then(result => {
		// 		console.log(result)
		// 	})
		// 	.catch(err => {
		// 		console.log(err)
		// 	});


		// 		fetch("https://judge0.p.rapidapi.com/languages", {
		// 	"method": "GET",
		// 	"headers": {
		// 		"x-rapidapi-host": "judge0.p.rapidapi.com",
		// 		"x-rapidapi-key": "9b0f31e01fmsh859f41ecd1db8bap19b89fjsn60e1e45356ff"
		// 	}
		// })
		// 	.then(response => {
		// 		console.log(response);
		// 	})
		// 	.catch(err => {
		// 		console.log(err);
		// 	});

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