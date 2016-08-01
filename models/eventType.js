const Sequelize = require('sequelize');
const db = require('./_db');

module.exports = db.define('eventType', {
	type: {
		type: Sequelize.STRING,
		allowNull: false
	}
});