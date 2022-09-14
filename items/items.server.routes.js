'use strict';

const express = require('express'),
	items = require('./items.server.controller');

let router = express.Router();

router
	.route('/items')
	.get(items.getAllItems)
	.put(items.addItems)
	.delete(items.clearAllItems);

router.param('id', items.getById);

module.exports = router;
