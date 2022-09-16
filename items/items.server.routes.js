'use strict';

const express = require('express'),
	items = require('./items.server.controller');

let router = express.Router();

router
	.route('/items')
	.get(items.getAllItems)
	.post(items.addItems)
	.delete(items.clearAllItems);

router
	.route('/items/:id')
	.get(items.getItemById);

router
	.route('/items/:updateId')
	.post(items.updateItemById);

router.param('id', items.getById);

module.exports = router;
