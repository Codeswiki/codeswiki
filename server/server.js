"use strict";

const path = require('path');

const express = require('express');
const app = express();

const mongoose = require('mongoose');

const articleController = require('./db/articleController');
const contributorController = require('./db/contributorController');

console.log('Server is running');

app.get('/', (req, res) => {



});

app.listen(3000);