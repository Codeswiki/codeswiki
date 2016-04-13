"use strict";

import React from 'react';

class About extends React.Component {
	
	constructor(props) {
		super(props);
  }

	render() {
		return(
				<div className='about'>
					<h2>Project Contributors:</h2>
					<p>Alex Patch, Cohort 6</p>
				</div>
			);
	}

}

module.exports = About;