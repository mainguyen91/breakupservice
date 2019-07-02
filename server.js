const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const {
    postNewProfile,
    loggedUser,
    postNewOrder, 
    viewOrder,
    logout
} = require("./controllers/routeController");
const { connector } = require('./database/configuration/dbConfig');
const cookieParser = require("cookie-parser");
const session = require("express-session");
const morgan = require("morgan");

app.use(express.json());
app.use(cookieParser());
app.use(session({
    name: process.env.SESSION_COOKIE,
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
})
);
app.use(morgan("dev"));

function checkCookies(req, res) {
    if(!req.cookies.userCookie) {
        res.send(false)
    }else {
        res.send(true)
    }
}

app.get("/", (req, res) => {
    checkCookies(req, res)
});

// app.get("/register", isUserLoggedIn, getRegistrationPage);

app.post("/register", postNewProfile);


app.post("/login", loggedUser);

app.post("/newOrder", postNewOrder);
app.get("/overview", viewOrder);

app.get("/", logout);

connector.sync()
    .then(() => { app.listen(port, () => console.log(`Got ears on port ${port}`)) })
    .catch(error => console.error(`Could not sync connector with server ${error.stack}`))
