'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/product.controller')

router.post('/', controller.post);
router.get('/:id', controller.get);
router.put('/', controller.put);
router.delete('/:id', controller.delete);

module.exports = router;