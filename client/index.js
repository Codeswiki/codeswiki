import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './modules/app';
import About from './modules/about';
import Article from './';

ReactDOM.render((
	<Router history = {hashHistory}>
		<Route path="/" component={App}/>
		<Route path="/about" component={About}/>
	</Router>
), document.getElementById('container'));