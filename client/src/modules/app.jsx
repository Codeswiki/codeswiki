import React from 'react';
import { Link } from 'react-router';
import fetch from 'whatwg-fetch';
import moment from 'moment';

const Headline = require('./headline.jsx');
const Article = require('./mvp_article.jsx');

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {topArticles: []};
	}

	componentDidMount() {

		fetch('/articles')
			.then(response => {
				return response.json();
			}).then(json => {
				this.setState(topArticles: json);
			})
			.catch(err => {
				throw err;
			});
	}

	render() {
		let articleHeadlines = this.state.topArticles.map((article) => {
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