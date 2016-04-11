"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';

const Headline = require('./headline.jsx');

class App extends React.component {

	constructor() {
		super(props);
	}

	getInitialState() {
		return { 
			topArticles: []
		};

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
			<table id='app-main' key='app-main' className='container'>
				<tbody>
				{articleHeadlines}
				</tbody>
			</table>

			);
	}

}

ReactDOM.render(<App />, document.getElementById('app'));
