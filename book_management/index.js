const express = require("express");
const exphbs = require("express-handlebars");

const conn = require("./db/conn");
const Book = require("./models/Book");
const booksRouters = require("./router/booksRouters");

const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

app.use(express.static("public"));

app.use("/books", booksRouters);

conn
.sync()
.then(() => {
    app.listen(3000, () => {
        console.log(`Server is working!`);
    });
})
.catch((err) => console.log(err))