let items = {};

module.exports.getAllItems = (req, res) => {
	try {
		console.log(items);
		res.status(200).json(Object.keys(items).map((item) => {
			return { 'id': item, 'name': items[item] };
		}));
	} catch (err) {
	}
};

module.exports.getItemById = (req, res) => {
	try {
		res.status(200).json(req.item);
	} catch (err) {
	}
};

module.exports.updateItemById = (req, res) => {
	try {
		items[req.params.updateId] = req.body.name;
		res.status(200).json({"updated": true, name: items[req.params.updateId]});
	} catch (err) {
	}
};

 module.exports.addItems = (req, res) => {
	try {
		const itemsToAdd = req.body.items;
		for(let item of itemsToAdd) {
			// Note: this will overwrite if the user sends an item with the same ID twice
			items[item.id] = item.name;
		}
		res.status(200).json(items);
	} catch (err) {
	}
};

 module.exports.clearAllItems = (req, res) => {
	try {
		items = [];
		res.status(200).json({cleared: true});
	} catch (err) {
	}
};

module.exports.getById =  (req, res, next, id) => {
	if (items[`${id}`]) {
		req.item = {"id": `${id}`, "name": items[`${id}`]};
	}
	next();
}