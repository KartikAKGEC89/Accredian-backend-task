const Sequelize = require('sequelize');
 
const db = new Sequelize('refer', 'root', 'root', {
    host: "localhost",
    dialect: "mysql"
});
 
export default db;