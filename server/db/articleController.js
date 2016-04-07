"use strict";
const Article =  require('./articleModel');

module.exports = {

	getTopArticles: function(req, res) {
		Article.find({}, (err, records) => {
			res.set('Content-Type', 'application/json');
			res.status('200');
			res.send(records);
		});
	}

};