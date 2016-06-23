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

app.use(express.static('./client/public'));

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