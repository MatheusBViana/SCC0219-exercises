'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const store = require('./routes/store')
app.use('/', store);
// app.use(express.static('public'))

module.exports = app;