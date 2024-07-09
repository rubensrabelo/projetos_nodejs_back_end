const {DataTypes} = require("sequelize");

const conn = require("../db/conn");

const Book = conn.define("Book", {
    title: {
        type: DataTypes.STRING,
        require: true,
        unique: true,
        allowNull: false,
    },
    category: {
        type: DataTypes.STRING,
        require: true,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATEONLY,
        require: true,
        allowNull: false,
    },
    author: {
        type: DataTypes.STRING,
        require: true,
    },
    country: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypess.STRING
    },
});

module.exports = Book;