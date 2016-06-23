/*

Copyright (c) 2016 [Alex Patch]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/

import React from 'react';
import { Link } from 'react-router';
import fetch from 'whatwg-fetch';
import moment from 'moment';

const Headline = require('./headline.jsx');
const Article = require('./mvp_article.jsx');

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = { topArticles: [] };
	}

	componentDidMount() {
		fetch('/articles')
			.then(response => response.json())
			.then(json => this.setState(topArticles: json))
			.catch(err => {
				throw err; // TODO: Improove error-handling
			});
	}

	render() {
		let articleHeadlines = this.state.topArticles.map(article => {
			return (
				<Headline key={article.id} title={article.title} updated={moment(article.updated).format('MMMM Do YYYY, hh:mm a')} />
				);
		});

		return (
			<div id="main">
				<div className = "header">
					<ul className="navbar" role="nav">
						<li className="link"><Link to="/">Home</Link></li>
						<li className="link"><Link to="/about">About</Link></li>
						<li className="link"><Link to="/article">New Article</Link></li>
					</ul>
				</div>
			
				<div id="headline-container">
					<ol id="headlines" className="container">
						{articleHeadlines}
					</ol>
				</div>

				<div className="footer">
					<ul className="navbar" role="nav">
						<li className="link">Built by Cohort 6</li>
						<li className="link"><Link to="/about">Contrubutors</Link></li>
					</ul>
				</div>
			</div>

			);

	}

}

module.exports = App;