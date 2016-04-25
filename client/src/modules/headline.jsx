import React from 'react';
import { Link } from 'react-router';

class Headline extends React.Component {

	constructor(props) {
		super(props);
	}

	componentWillMount() {

	}

	componentDidMount() {

	}

	render() {
		
		return (
			<li key={this.props.key}>
				<Link to="/article/:title">
					<ul>
						<li className="headline_title">{this.props.title}</li>
						<li className="headline_updated">{this.props.updated}</li>
					</ul>
				</Link>
			</li>
		);
	}

}

module.exports = Headline;