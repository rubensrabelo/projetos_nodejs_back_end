const {DataTypes} = require("sequelize");

const conn = require("../db/conn");

const Book = conn.define("Book", {
    title: {
        type: DataTypes.STRING,
        require: true,
        unique: true,
    },
    category: {
        type: DataTypes.STRING
    },
    date: {
        type: DataTypes.DATEONLY,
    },
    author: {
        type: DataTypes.STRING
    },
    country: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypess.STRING
    },
});

module.exports = Book;