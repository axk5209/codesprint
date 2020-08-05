import React from 'react';
import EditorBody from "./EditorBody"
import EditorHeader from "./EditorHeader"

export default function EditorPage ()
{
	return (
		<div style = {{background: "#fffbfa"}}>
			<EditorHeader></EditorHeader>
			<EditorBody></EditorBody>
		</div>
	)
}