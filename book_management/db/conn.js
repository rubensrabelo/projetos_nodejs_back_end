const {Sequelize} = require("sequelize");

const sequelize = new Sequelize("model_management", "root", "", {
    host: "localhost",
    dialect: "mysql"
});

try {
    sequelize.authenticate();
    console.log("You're connected with MySQL!");
} catch(err) {
    console.log(`An error occurred while connecting to the Database!`)
    console.log(err);
}

module.exports = sequelize;