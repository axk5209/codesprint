import React, {useState} from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools"


// Render editor

export default function AceBox (props)
{
	const [codeValue, setCodeValue] = useState(props.initialCodeValue)

	function onChange(newCodeValue) {
		setCodeValue(newCodeValue)
	}
	console.log(props)
	return (
		<AceEditor
			mode={props.mode}
			theme="github"
			onChange={onChange}
			name="UNIQUE_ID_OF_DIV"
			editorProps={{ $blockScrolling: true }}
			setOptions={{
				enableBasicAutocompletion: true,
				enableLiveAutocompletion: true,
				enableSnippets: true
			}}
			value = {codeValue}
			height = "500px"
			width = "80%"
		/>
	)
}