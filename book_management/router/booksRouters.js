const express = require("express");

const BookController = require("../controller/BookController");

const router = express.Router();

router.get("/createbook", BookController.createBook);
router.post("/createbook", BookController.createBookPost);
router.post("/remove/:id", BookController.removeBook);
router.get("/editbook/:id", BookController.updateBook);
router.post("/editbook", BookController.updateBookPost)
router.get("/", BookController.showAllBooks);

module.exports = router;