const Sequelize = require('sequelize');
const db = require('./_db');

module.exports = db.define('event', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	// Enum? with startHour & startMin in 15 min intervals & AM/PM 
	startTime: {
		type: Sequelize.STRING,
		allowNull: false
	},
	endTime: {
		type: Sequelize.STRING,
		allowNull: false
	},
	date: {
		type: Sequelize.DATEONLY,
		allowNull: false
	},
	address: {
		type: Sequelize.STRING,
		allowNull: false
	},
	location: {
		type: Sequelize.ENUM('New York', 'Chicago'),
		allowNull: false
	},
	description: {
		type: Sequelize.TEXT
	},
	capacity: {
		type: Sequelize.INTEGER
	}, 
	projectedAttendance: {
		type: Sequelize.INTEGER
	}, 	
	actualAttendance: {
		type: Sequelize.INTEGER
	}
	//skillLevel should be on the event level rather than eventType since they could be taught differently based on general skill level of the attendees?
	skillLevel: {
		type: Sequelize.STRING,
		allowNull: false
	}
});