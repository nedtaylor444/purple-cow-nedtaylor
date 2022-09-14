let items = [];

/**
 * @param {*} req
 * @param {*} res
 */
module.exports.getAllItems = (req, res) => {
	try {
		res.status(200).json(items);
	} catch (err) {
	}
};

/**
 * @param {*} req
 * @param {*} res
 */
 module.exports.addItems = (req, res) => {
	try {
	} catch (err) {
	}
};

/**
 * @param {*} req
 * @param {*} res
 */
 module.exports.clearAllItems = (req, res) => {
	try {
	} catch (err) {
	}
};

module.exports.getById =  (req, res, next, id) => {
	req.item = this.items.find((item) => item.id === id);
	next();
}