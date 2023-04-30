const { Sequelize } = require("sequelize");

module.exports = (sequelize, Sequelize) => 
{
    const User = sequelize.define(
        "User",
        {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false,
            },
        },
        {
            tableName: "User",
        }
    );
    return User;
}