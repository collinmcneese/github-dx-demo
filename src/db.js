// db.js
// Export database connection using sequelize

const Sequelize = require('sequelize');

// Create connection to sqlite db
const db_session = new Sequelize({
  dialect: 'sqlite',
  storage: 'users.sqlite',
});

const db = db_session.authenticate();

// Export connection
module.exports = db;
