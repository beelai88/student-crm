const Sequelize = require('sequelize');
const db = require('./_db');

module.exports = db.define('eventRating', {
	// what fields do we want here? can we do data analysis without this separate model?
	success: {
		type: Sequelize.BOOLEAN
	}
});