const Sequelize = require('sequelize');
const db = require('./_db');

module.exports = db.define('eventStaffing', {
	organizer: {
		type: Sequelize.STRING
	},
	instructor: {
		type: Sequelize.STRING
	},
	teachingAssistant: {
		type: Sequelize.STRING
	},
	guestSpeaker: {
		type: Sequelize.ARRAY(Sequelize.STRING)
	}
});