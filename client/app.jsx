"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.component {

	getInitalState() {
		// Store article links in an array of objects. Initalize as an empty array,
		// 	then populate from the database

		// Fetch articles or just article metadata? How? 
		
		articles: []
	}

	componentWillLoad() {

	}

	componentDidLoad() {
		// Update the list of articles from the database
	}

	render() {
		let topArticles = this.state.articles.map((article) => {
			// Construct an article list item div for each article.
		});

		return(
			<div id='app-main' key='app-main' className='container'>
				{topArticles}
			</div>

			);
	}

}
