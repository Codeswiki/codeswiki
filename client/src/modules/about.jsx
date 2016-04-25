import React from 'react';

class About extends React.Component {
	
	constructor(props) {
		super(props);
  }

	render() {
		return(
				<div className='about'>
					<h2>Project Contributors:</h2>
					<ul id="contrib-list">
						<li>Alex Patch, Cohort 6</li>
						<li>Carlos Corral, Cohort 6</li>
					</ul>
				</div>
			);
	}

}

module.exports = About;