const express = require("express");
const exphbs = require("express-handlebars");
const session = require("express-session");
const FileStore = require("session-file-store")(session);
const flash = require("express-flash");

const conn = require("./db/conn");
const Auth = require("./models/User");
const Book = require("./models/Book");

const authRoutes = require("./router/authRoutes");
const booksRouters = require("./router/booksRouters");
const BookController = require("./controller/BookController");

const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

//  Entender o funcionamento dessa parte
app.use(
    session({
        name: "session",
        secret: "my_secret", // Melhorar essa parte
        resave: false,
        saveUninitialized: false,
        store: new FileStore({
            logFn: function() {},
            path: require("path").join(require("os").tmpdir(), "sessions"),
        }),
        cookie: {
            secure: false,
            maxAge: 360000,
            expires: new Date(Date.now() + 360000),
            httpOnly: true,
        },
    }),
);

app.use(flash());

app.use(express.static("public"));

app.use((req, res, next) => {
    if(req.session.userid) {
        res.locals.session = req.session;
    }

    next();
});

app.use("/books", booksRouters);

app.use("/", authRoutes);
app.get("/", BookController.showAllBooks);

conn
//.sync({force: true})
.sync()
.then(() => {
    app.listen(3000, () => {
        console.log(`Server is working!`);
    });
})
.catch((err) => console.log(err))