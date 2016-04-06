"use strict";

const path = require('path');
const fs = require('fs');

const express = require('express');
const app = express();

const mongoose = require('mongoose');

const articleController = require('./db/articleController');
const contributorController = require('./db/contributorController');

let db;

// mongoose.connect(JSON.parse(fs.readFileSync(__dirname + '/db/config.json','utf8')).uri, function() {
//   connectedToDB = true;
//   console.log('connected to mongo');
// });

mongoose.connect('mongodb://localhost:27017/test', function() {
	db = mongoose.connection;
	db.on('open', () => {console.log('Connected to MongoDB');});
	db.on('error', (err) => {console.error(err);});
});

app.use(express.static('./client/static_pages'));

app.get('*', (req, res) => {
	fs.readFile('./build/bundle.js', (err, data) => {
		if(err) {
			res.status('504');
			return console.error(err);
		}
		res.status('200');
		res.set('Content-Type', 'text/javascript');
		res.send(data);
	});
});

app.listen(3000);