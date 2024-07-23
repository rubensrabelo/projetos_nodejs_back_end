const {DataTypes} = require("sequelize");

const conn = require("../db/conn");
const User = require("./User");

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
        type: DataTypes.STRING
    },
});

Book.belongsTo(User);
User.hasMany(Book);

module.exports = Book;