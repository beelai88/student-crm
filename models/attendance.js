const Sequelize = require('sequelize');
const db = require('./_db');

module.exports = db.define('attendance', {
	actuallyAttended: {
		type: Sequelize.BOOLEAN
	}
});
