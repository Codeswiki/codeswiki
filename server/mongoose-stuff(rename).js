"use strict";

import mongoose from 'mongoose';

mongoose.connect(localhost:27017);

const articleSchema = mongoose.Schema({
	title: String,
	updated: [Date],
	contributors: [String],	// Referances to all contributors -- are strings enough?
	tags: [String],
	content: String
});