const Sequelize = require('sequelize');
const db = require('./_db');

module.exports = db.define('user', {
	firstName: {
		type: Sequelize.STRING,
		allowNull: false
	},
	lastName: {
		type: Sequelize.STRING,
		allowNull: false
	},
	email: {
		type: Sequelize.STRING,
		allowNull: false, 
		unique: true, 
		validate: {
			isEmail: true
		}
	},
	phone: {
		type: Sequelize.STRING,
		min: 10, 
		max: 10
	},
	location: {
		type: Sequelize.ENUM('New York', 'Chicago')
	}
});
