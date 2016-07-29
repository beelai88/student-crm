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
	//validator for this
	phone: {
		type: Sequelize.STRING,
		min: 10, 
		max: 10
	},
	location: {
		type: Sequelize.STRING
	},
	skillLevel: {
		type: Sequelize.RANGE(Sequelize.INTEGER)
		allowNull: false
	},
	howHeardAboutUs: {
		type: Sequelize.STRING,
		allowNull: false
	}
});
