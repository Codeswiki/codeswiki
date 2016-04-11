"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

class Headline extends React.Component {

	constructor() {
		super();
	}

	componentWillMount() {

	}

	componentDidMount() {

	}

	render() {
		
		return (
			<tr key={this.props.key}>
				<td className="article_title">{this.props.title}</td>
				<td></td>
				<td></td>
				<td></td>
				<td className="last_updated"><b>Last Updated:</b>{this.props.updated}</td>
			</tr>
		);
	}

}

module.exports = Headline;