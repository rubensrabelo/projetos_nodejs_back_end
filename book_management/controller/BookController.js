const Book = require("../models/Book");

module.exports = class BookController {
    static async showAllBooks(req, res) {
        const tasks = await Book.findAll({raw: true});

        res.render("books/allbooks", {tasks});
    }

    static createBook(req, res) {
        res.render("books/createbook");
    }

    static async addBook(req, res) {
        const book = {
            title: req.body.title,
            category: req.body.category,
            date: req.body.date,
            author: req.body.author,
            country: req.body.country,
            description: req.body.description,
        };

        await Book.create(book);

        res.redirect("books");
    }

    static async removeBook(req, res) {
        const id = req.body.id;

        await Book.destroy({where: {id}})

        res.redirect("books")
    }

    static async updateBook(req, res) {
        const id = req.params.id;

        const book = await Book.findOne({where: {id}, raw: true});

        res.render("books/editbook", {book});
    }

    static async updateBookPost(req, res) {
        const id = req.params.id;

        const book = {
            title: req.body.title,
            category: req.body.category,
            date: req.body.date,
            author: req.body.author,
            country: req.body.country,
            description: req.body.description,
        };

        await Book.update({where: {id}});

        res.render("books");
    }
};