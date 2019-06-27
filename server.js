const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const {
    getHomePage,
    getRegistrationPage,
    postNewProfile,
    loggedUser,
    postNewOrder
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

let isUserLoggedIn = (req, res, next) => {
    if(req.session.user && req.cookies.authCookie) {
        res.redirect("/profile")
    } else {
        next();
    }
}

app.get("/", isUserLoggedIn, getHomePage);

app.get("/register", isUserLoggedIn, getRegistrationPage);
app.post("/register", postNewProfile);

app.post("/login", loggedUser);


app.post("/profile/newOrder", postNewOrder);

connector.sync()
    .then(() => { app.listen(port, () => console.log(`Got ears on port ${port}`)) })
    .catch(error => console.error(`Could not sync connector with server ${error.stack}`))