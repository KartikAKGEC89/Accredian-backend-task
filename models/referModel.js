const Sequelize = require('sequelize');
const db = require('../config/Database');
 
const { DataTypes } = Sequelize;
 
const User = db.define('users', {
  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  referrename: {
    type: Sequelize.STRING
  },
  referedAt: {
    type: Sequelize.DATE
  },
  updatedAt: {
    type: Sequelize.DATE
  }
});
 
(async () => {
    await db.sync();
})();
 
module.exports = User