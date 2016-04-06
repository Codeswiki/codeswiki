"use strict";

const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
	id: {type: String, required: true},
	title: {type: String, required: true},
	updated: {type: Date, required: true},
	contributors: {type: [String], required: true},
	tags: {type: [String], required: true},
	content: {type: String, required: true}
});

module.exports = mongoose.model('article', articleSchema);