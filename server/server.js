"use strict";

const path = require('path');
const fs = require('fs');

const express = require('express');
const app = express();

const mongoose = require('mongoose');

const articleController = require('./db/articleController');
const contributorController = require('./db/contributorController');

console.log('Server is running');

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