'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const productRoute = require('./routers/product.route');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(cors({origin: ['http://localhost:3000'], credentials: true}));

app.use('/products', productRoute);

app.use(express.static('public'));

module.exports = app;