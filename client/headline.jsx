"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

const Headline = React.createClass({

	getInitalState: function() {
		
	},

	componentWillMount: function() {

	},

	componentDidMount: function() {

	},

	render: function () {
		
		return (
			<div key={this.props.key}>
				<span><b>{this.props.title}</b></span>
				<span>{this.props.updated}</span>
			</div>
		);
	}

});

module.exports = Headline;