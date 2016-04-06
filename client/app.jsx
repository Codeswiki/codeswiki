"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

const Headline = require('./headline.jsx');

const App = React.createClass({

	getInitialState: function() {
		// Store article links in an array of objects. Initalize as an empty array,
		// 	then populate from the database

		// Fetch articles or just article metadata? How? 
		
		// topArticles: [] Hard-coded below for testing
		return { 
			topArticles: [{id: '00000001',
											updated: '1459914193791',
											title: "How to train your keyboard"
										},
										{id: '00000002',
											updated: '1459914193795',
											title: "Cooking for Milennials"
										},
										{	id: '00000003',
											updated: '1459914193797',
											title: "CSS Sucks"
										}]
		};

	},

	render: function() {
		console.log(this.state);
		let articleHeadlines = this.state.topArticles.map((article) => {
			return (
				<Headline key={article.id} title={article.title} updated={article.updated} />
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
