"use strict";
const Article =  require('./articleModel');

module.exports = {

	getTopArticles: function() {
		Article.find({}).sort('updated');
	}

};