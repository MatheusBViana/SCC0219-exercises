'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/store-controller');

router.get('/store/:id', controller.get);
router.put('/store/:id', controller.put);
router.delete('/store/:id', controller.delete);
module.exports = router;