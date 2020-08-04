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
		minWidth: 120
	},
	selectEmpty: {
		marginTop: theme.spacing(2)
	}
}));

export default function EditorBody() {
	const classes = useStyles()
	const languages = ["java", "c++", "python", "javascript"]
	const initialCodeValues = [`class Hello {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello Java!"); // Display the string.\n\t}\n}`, "", "", "", ""]
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
		// const config = {
		// 	headers: {
		// 		"x-rapidapi-host": "judge0.p.rapidapi.com",
		// 		"x-rapidapi-key": "9b0f31e01fmsh859f41ecd1db8bap19b89fjsn60e1e45356ff"
		// 	},
		// }
		// const response = await axios.get("https://judge0.p.rapidapi.com/languages", config)
		// console.log(response)


				fetch("https://judge0.p.rapidapi.com/languages", {
			"method": "GET",
			"headers": {
				"x-rapidapi-host": "judge0.p.rapidapi.com",
				"x-rapidapi-key": "9b0f31e01fmsh859f41ecd1db8bap19b89fjsn60e1e45356ff"
			}
		})
			.then(response => {
				console.log(response);
			})
			.catch(err => {
				console.log(err);
			});

		// const poseConfig = {
		// 	headers: {
		// 		"x-rapidapi-host": "judge0.p.rapidapi.com",
		// 		"x-rapidapi-key": "9b0f31e01fmsh859f41ecd1db8bap19b89fjsn60e1e45356ff",
		// 		"content-type": "application/json",
		// 		"accept": "application/json"
		// 	},
		// }
		// const body = "#include <stdio.h>\n\nint main(void) {\n  char name[10];\n  scanf(\"%s\", name);\n  printf(\"hello %s\\n\", name);\n  return 0;\n}"
		// const postResponse = await axios.post("https://judge0.p.rapidapi.com/submissions", body, poseConfig)
		// console.log(response.data)
		fetch("https://judge0.p.rapidapi.com/submissions", {
			"method": "POST",
			"headers": {
				"x-rapidapi-host": "judge0.p.rapidapi.com",
				"x-rapidapi-key": "9b0f31e01fmsh859f41ecd1db8bap19b89fjsn60e1e45356ff",
				"content-type": "application/json",
				"accept": "application/json"
			},
			"body": {
				"language_id": 50,
				"source_code": "#include <stdio.h>\n\nint main(void) {\n  char name[10];\n  scanf(\"%s\", name);\n  printf(\"hello %s\\n\", name);\n  return 0;\n}",
				"stdin": "world"
			}
		})
			.then(response => {
				console.log(response);
			})
			.catch(err => {
				console.log(err);
			});
		// try {
		// 	const response = await axios.post(baseUrl, newRecipe, config) //third parameter contains request header
		// 	return response.data
		// }
		// catch (error)
		// {
		// 	return null
		// }

		// fetch("https://judge0.p.rapidapi.com/languages", {
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
				<Button size="large" variant="contained" onClick={onRun}>Run</Button>
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