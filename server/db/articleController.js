"use strict";
const Article =  require('./articleModel');

module.exports = {

	getTopArticles: function(req, res) {
		Article.find({}, (err, records) => {
			res.set('Content-Type', 'application/json');
			res.status('200');
			res.send(records);
		});
	},

	saveArticle: function(req, res) {
		Article.findOneAndUpdate({/*conditions*/}, req.body, {new: true, upsert: true, setDefaultsOnInsert: true}, (err, record) => {
			if(err) {
				res.set('Content-Type', 'application-json');
				res.status('504');
				res.send(err);
			} else {
				res.set('Content-Type', 'application-json');
				res.status('200');
				res.send(record);
			}
		});
	}

};