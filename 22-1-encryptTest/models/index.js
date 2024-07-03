const Sequelize = require('sequelize');
const config = require(__dirname + '/../config/config.json')["development"];
const db = {}; // 빈 객체

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
); // sequelize 객체



db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
