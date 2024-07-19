const Book = require("../models/Book");

module.exports = class BookController {
    static async showAllBooks(req, res) {
        const books = await Book.findAll({raw: true});

        res.render("books/allbooks", {books});
    }

    static createBook(req, res) {
        res.render("books/createbook");
    }

    static async createBookPost(req, res) {
        const book = {
            title: req.body.title,
            category: req.body.category,
            date: req.body.date,
            author: req.body.author,
            country: req.body.country,
            description: req.body.description,
        };

        await Book.create(book);

        res.render("books/allbooks");
    }

    static async removeBook(req, res) {
        const id = req.body.id;

        await Book.destroy({where: {id}})

        res.redirect("books")
    }

    static async updateBook(req, res) {
        const id = req.params.id;

        const book = await Book.findOne({where: {id: id}, raw: true});

        res.render("books/editbook", {book});
    }

    static async updateBookPost(req, res) {
        const id = req.body.id;

        const book = {
            title: req.body.title,
            category: req.body.category,
            date: req.body.date,
            author: req.body.author,
            country: req.body.country,
            description: req.body.description,
        };

        await Book.update(book, {where: {id}});

        res.render("books/allbooks");
    }
};