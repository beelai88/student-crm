const Sequelize = require('sequelize');
const db = require('./_db');

module.exports = db.define('attendance', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	}
});
