'use strict';

const { model, Schema } = require('mongoose');

const articleSchema = new Schema({
  title: { type: String, unique: true, required: true }, //TODO: Add validation
  // commits: [{
  //   id: { type: ObjectId, ref: 'Commit' },
  //   author:
  //   time: { type: Date, default: Date.now, unique: false, required: true }
  // }],
  fulltext: { type: String, required: true }, //FIXME: Should this be a blob? How to model data...
  updated:  type: Date, default: Date.now, unique: false, required: true }
  //FIXME: Expand?!
});

exports.articleSchema = articleSchema;
exports.articleModel = model('Article', articleSchema);
