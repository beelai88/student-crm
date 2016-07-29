const Sequelize = require('sequelize');

const config = require('../config');

// const db = new Sequelize(config.DATABASE_URI);
const db = new Sequelize(config.DATABASE_URI, {
	logging: false
});

module.exports = db;