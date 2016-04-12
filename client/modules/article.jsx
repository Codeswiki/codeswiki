"use strict";

import React from 'react';
import { Link } from 'react-router';
import { Editor, EditorState, RichUtils, convertToRaw, convertFromRaw } from 'draft-js';

class Article extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {editorState: EditorState.createEmpty()};

		this.focus = () => this.refs.editor.focus();
    this.onChange = (editorState) => {
    	console.log("Pre-raw: ", this.state.editorState.getCurrentContent());
    	console.log("To Raw: ", convertToRaw(this.state.editorState.getCurrentContent()));
    	console.log("From Raw", convertFromRaw(convertToRaw(this.state.editorState.getCurrentContent())));
    	// console.log(convertToRaw);
    	this.setState({editorState});
    }

    this.handleKeyCommand = (command) => this._handleKeyCommand(command);
    this.toggleBlockType = (type) => this._toggleBlockStyle(type);
    this.toggleInlineStyle = (style) => this._toggleInlineStyle(style);
  }

  _handleKeyCommand(command) {
  	const {editorState} = this.state;
  	const newState = RichUtils.handleKeyCommand(editorState, command);
  	if(newState) {
  		this.onChange(newState);
  		return true;
  	}
  	return false;
  }

  _toggleBlockType(blockType) {
  	this.onChange(
  		RichUtils.toggleBlockType(
  			this.state.editorState,
  			blockType)
  		);
  }

  _toggleInlineStyle(inlineStyle) {
  	this.onChange(
  		RichUtils.toggleInlineStyle(
  			this.state.editorState,
  			inlineStyle
  		)
  	);
  }

	render() {

		const {editorState} = this.state;

		return (
			<div className="article-root">

				<ul role="nav">
					<li><Link to="/">Home</Link></li>
				</ul>

				<div>
					<Editor editorState={editorState} onChange={this.onChange} />
				</div>

			</div>
			);
	}

}

class StyleButton extends React.Component {
	constructor(props) {
		super(props);
		this.onToggle = (e) => {
			e.preventDefault;
			this.props.onToggle(this.props.style);
		};
	}

	render() {
		return (
			<span className="style-button" onMouseDown="this.onToggle">
				{this.props.label}
			</span>
			);
	}
}

const BLOCK_TYPES = [
	{label: 'H1', style: 'header-one'},
	{label: 'H2', style: 'header-two'},
	{label: 'H3', style: 'header-three'},
	{label: 'H4', style: 'header-four'},
	{label: 'H5', style: 'header-five'},
	{label: 'H6', style: 'header-six'},
	{label: 'Blockquote', style: 'blockquote'},
	{label: 'UL', style: 'unordered-list-item'},
	{label: 'OL', style: 'ordered-list-item'},
	{label: 'Code Block', style: 'code-block'}
];




module.exports = Article;