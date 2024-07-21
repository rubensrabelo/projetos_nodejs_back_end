const express = require("express");

const BookController = require("../controller/BookController");

const router = express.Router();

router.get("/create", BookController.createBook);
router.post("/create", BookController.createBookPost);
router.post("/remove", BookController.removeBook);
router.get("/edit/:id", BookController.updateBook);
router.post("/edit", BookController.updateBookPost)
router.get("/", BookController.showAllBooks);

module.exports = router;