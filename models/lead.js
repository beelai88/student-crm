const Sequelize = require('sequelize');
const db = require('./_db');

module.exports = db.define('lead', {
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
	},
	skillLevel: {
		type: Sequelize.RANGE(Sequelize.INTEGER)
	},
	howHeardAboutUs: {
		type: Sequelize.ARRAY(Sequelize.STRING)
	}
});
