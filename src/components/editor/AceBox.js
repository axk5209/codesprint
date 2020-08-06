import React, {useState, useEffect, useRef} from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools"
// Render editor

export default function AceBox (props)
{
	// const aceEditorRef = useRef(null)
	// useEffect(() => {
	// 	if (aceEditorRef)
	// 		aceEditorRef.current.editor.value = props.codeValue
	// }, [props])

	return (
		<AceEditor
			mode="java"
			theme="github"
			onChange={props.onChange}
			name="UNIQUE_ID_OF_DIV"
			editorProps={{ $blockScrolling: true }}
			setOptions={{
				enableBasicAutocompletion: true,
				enableLiveAutocompletion: true,
				enableSnippets: true
			}}
			value = {props.codeValue}
			height = "500px"
			width = "80%"
			// ref = {aceEditorRef}
		/>
	)
}