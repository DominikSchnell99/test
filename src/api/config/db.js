const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
    host: "localhost",
    dialect: "postgres",
    username: "postgres",
    password: "postgres",
    database: "planmate",
    logging: false,
})

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.User = require("../user")(sequelize, Sequelize);

module.exports = db;