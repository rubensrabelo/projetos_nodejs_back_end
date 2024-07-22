const {DataTypes} = require("sequelize");

const conn = require("../db/conn");

const User = conn.define("User", {
    name: {
        type: DataTypes.STRING,
        require: true,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        require: true,
        allowNull: null
    },
    password: {
        type: DataTypes.STRING,
        require: true,
        allowNull: null
    }
});

module.exports = User;