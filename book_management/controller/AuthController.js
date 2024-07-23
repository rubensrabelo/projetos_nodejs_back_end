const User = require("../models/User");

const bcrypt = require("bcryptjs");

module.exports = class AuthController {
    static login(req, res) {
        res.render("auth/login");
    }

    // Realizar o Login do usuário

    static register(req, res) {
        res.render("auth/register");
    }

    static async registerPost(req, res) {
        const {name, email, password, confirmPassword} = req.body;

        if(password != confirmPassword) {
            req.flash("message", "The password don't match, try again!");
            res.render("auth/register");
            return;
        }

        const checkIfUserExists = await User.findOne({where: {email: email}}); 

        if(checkIfUserExists) {
            req.flash("message", "The email is already in use.")
            res.render("auth/register");
            return;
        }

        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);

        const user = {
            name,
            email,
            password: hashedPassword
        }

        try {
            const createUser = await User.create(user);
            req.flash("message", "Registration completed successfully");

            req.session.userid = createUser.id;

            req.session.save(() => {
                res.redirect("/");
            });
        } catch (error) {
            console.log(error);
        }
    }

    static logout(req, res) {
        req.session.destroy();
        res.redirect("/login");
    }
}