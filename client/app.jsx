"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';

const Headline = require('./headline.jsx');

const App = React.createClass({

	getInitialState: function() {
		// Store article links in an array of objects. Initalize as an empty array,
		// 	then populate from the database

		// Fetch articles or just article metadata? How? 
		
		// topArticles: [] Hard-coded below for testing
		return { 
			topArticles: []

									// [{id: '00000001',
									// 		updated: 1459914193791,
									// 		title: "How to train your keyboard"
									// 	},
									// 	{id: '00000002',
									// 		updated: 1459924203795,
									// 		title: "Cooking for Milennials"
									// 	},
									// 	{	id: '00000003',
									// 		updated: 1459934213797,
									// 		title: "CSS Sucks"
									// 	}]
		};

	},

	componentDidMount: function() {
		$.getJSON('/articles').then(
			(data) => this.setState({topArticles: data}),
			(err) => console.error('Unable to fetch articles')
			);
	},

	render: function() {
		let articleHeadlines = this.state.topArticles.map((article) => {
			return (
				<Headline key={article.id} title={article.title} updated={moment(article.updated).format('MMMM Do YYYY, hh:mm a')} />
				);
		});

		return(
			<div id='app-main' key='app-main' className='container'>
				{articleHeadlines}
			</div>

			);
	}

});

ReactDOM.render(<App />, document.getElementById('app'));
