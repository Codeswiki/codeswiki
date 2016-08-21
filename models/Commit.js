'use strict';

const { model, Schema } = require('mongoose');
//TODO: Move the email regex to config
const emailRegex = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;

const commitSchema = new Schema({
  //TODO: It would be cool if there were a linked-list structure here, where each commit linked to the previous one
  article: {
    id: { type: ObjectId, ref: 'Article', unique: false, required: true },
    title: { type: String, unique: true, required: true }
  },
  author: { //FIXME: Should this be an array of authors for collaberative-commits?
    id: { type: ObjectId, ref: 'Author', unique: false, required: true },
    displayname: { type: String, unique: true, required: true, match: /^[a-z]{1}[a-z|0-9|\-|\_]{4,18}[a-z|0-9]{1}$/i },
    email: { type: String, unique: true, required: true, match: emailRegex }
  },
  hash: { type: String, unique: true, required: true }, //FIXME: Should this be a buffer? Is it even needed?
  message: { type: String, unique: false, required: true },
  time: { type: Date, default: Date.now, unique: false, required: true }
});

//TODO: Add methods to the commit schema here
// including a hash generator (SHA2?)

exports.commitSchema = commitSchema;
exports.commitModel = model('commit', commitSchema);
