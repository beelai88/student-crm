const Sequelize = require('sequelize');
const db = require('./_db');

module.exports = db.define('comment', {
	text: {
		type: Sequelize.TEXT
	}
});
