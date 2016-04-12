"use strict";

const path = require('path');
const fs = require('fs');

const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const articleController = require('./db/articleController');
const contributorController = require('./db/contributorController');

let db;

mongoose.connect(JSON.parse(fs.readFileSync(__dirname + '/db/config.json', 'utf8')).uri, function() {
	db = mongoose.connection;
	db.on('open', () => {console.log('Connected to MongoDB');});
	db.on('error', (err) => {console.error("Database Error: ", err);});
});

app.use(express.static('./client/static_pages'));

app.use(bodyParser());

app.get('/bundle.js', (req, res) => {
	
	console.log("Got a request!", Date.now());
	
	fs.readFile('./build/bundle.js', (err, data) => {
		if(err) {
			res.status('504');
			res.send();
			return console.error(err);
		}
		res.status('200');
		res.set('Content-Type', 'text/javascript');
		res.send(data);
	});

});

app.get('/articles', (req, res) => {
	articleController.getTopArticles(req, res);
});

app.post('/articles', (req, res) => {
	console.log("Got a post request");
	console.log(req.body);
	articleController.saveArticle(req, res);
});

app.listen(8080);