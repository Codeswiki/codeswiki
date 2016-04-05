"use strict";

const mongoose = require('mongoose');

const contributorSchema = mongoose.Schema({
	id: {type: String, required: true},
	firstname: {type: String, required: false},
	lastname: {type: String, required: false},
	username: {type: String, required: true},
	personalPage: {type: String, required: false},
	articleContributions: {type: [Object], required: true},
	tags: {type: [String], required: true}
});

module.exports = mongoose.model('Contributor', contributorSchema);