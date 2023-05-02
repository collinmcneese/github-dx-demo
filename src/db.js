// db.js
// Export database connection using sequelize

const Sequelize = require('sequelize');

// Create connection to sqlite db
const db = new Sequelize({
  dialect: 'sqlite',
  storage: 'users.sqlite',
});

const user = db.define('user', {
  id: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
  name: Sequelize.STRING,
  emoji: Sequelize.STRING,
});

db.authenticate();
(async() => {
  await db.sync();
})();

// Export connection
module.exports = {
  db,
  user,
};
