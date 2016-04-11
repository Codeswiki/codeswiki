"use strict";

import React from 'react';
import { Link } from 'react-router';
import moment from 'moment';

const Headline = require('./headline.jsx');
const Article = require('./article.jsx');

class App extends React.Component {

	constructor() {
		super();
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
			<ul role="nav">
				<li><Link to="/">Home</Link></li>
				<li><Link to="/about">About</Link></li>
			</ul>

			<table id='app-main' key='app-main' className='container'>
				<tbody>
				{articleHeadlines}
				</tbody>
			</table>

			);

	}

}

Module.exports = App;