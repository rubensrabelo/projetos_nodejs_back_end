const express = require("express");

const BookController = require("../controller/BookController");

const router = express.Router();

router.get("/add", BookController.createBook);
router.post("/add", BookController.addBook);
router.post("remove/:id", BookController.removeBook);
router.get("/edit/:id", BookController.updateBook);
router.post("/edit", BookController.updateBookPost)
router.get("/", BookController.showAllBooks);

module.exports = router;