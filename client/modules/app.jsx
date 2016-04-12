"use strict";

import React from 'react';
import { Link } from 'react-router';
import moment from 'moment';

const Headline = require('./headline.jsx');
const Article = require('./article.jsx');

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {topArticles: []};
	}

	componentDidMount() {
		$.getJSON('/articles').then(
			(data) => this.setState({topArticles: data}),
			(err) => console.error('Unable to fetch articles')
			);
	}

	render() {
		let articleHeadlines = this.state.topArticles.map((article) => {
			return (
				<Headline key={article.id} title={article.title} updated={moment(article.updated).format('MMMM Do YYYY, hh:mm a')} />
				);
		});

		return (
			<div className="app">
				
				<ul className="main_nav" role="nav">
					<li><Link to="/">Home</Link></li>
					<li><Link to="/about">About</Link></li>
					<li><Link to="/article">New Article</Link></li>
				</ul>
	
				<ol id="app-main" key="app-main" className="container">
					{articleHeadlines}
				</ol>

				<div className="footer">
					<ul className="footer_nav" role="nav">
						<li>Built by Cohort 6</li>
						<li><Link to="/about">Contrubutors</Link></li>
					</ul>
				</div>
			</div>

			);

	}

}

module.exports = App;