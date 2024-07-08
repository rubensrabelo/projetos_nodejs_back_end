const {Sequelize} = require("sequelize");

const sequelize = new Sequelize("", "", "", {
    host: "",
    dialect: ""
});

try {
    sequelize.authenticate();
    console.log("You're connected with MySQL!");
} catch(err) {
    console.log(`An error occurred while connecting to the Database!`)
    console.log(err);
}

module.exports = sequelize;