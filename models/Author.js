'use strict';

const { model, Schema } = require('mongoose');
//TODO: Move the email regex to config
const emailRegex = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;

const authorSchema = new Schema({
  fullname: { type: String, unique: false, required: true }, //TODO: Add validation?
  displayname: { type: String, unique: true, required: true, match: /^[a-z]{1}[a-z|0-9|\-|\_]{4,18}[a-z|0-9]{1}$/i },
  email: { type: String, unique: true, required: true, match: emailRegex },
  joined: { type: Date, default: Date.now, unique: false, required: true }, //TODO: More advanced session tracking?
  rank: { type: Number, default: 0, unique: false, required: true },
  contributions: [{
    articleTitle: { type: String, unique: true, required: true },
    articleId: { type: ObjectId, unique: true, required: true },
    lastEdit: { type: Date, default: Date.now, unique: false, required: true },
    commits: [{ type: ObjectId, ref: 'Commit', required: true }]
  }]
});

//TODO: Add methods to the author schema here
//TODO: Uniqueness function that checks to see whether there are matches, case-insensative and without symbols

exports.authorSchema = authorSchema;
exports.authorModel = model('Author', authorSchema);
