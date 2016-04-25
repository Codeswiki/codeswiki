import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './components/App.jsx';
import About from './components/about.jsx';
import Article from './components/article.jsx';

ReactDOM.render((
	<Router history = {browserHistory}>
		
		<Route path="/" component={App} />

		<Route path="/about" component={About}/>

		<Route path="/article" component={Article}/>
		
	</Router>
), document.getElementById('container'));