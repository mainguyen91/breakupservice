const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const { postNewProfile } = require("./controllers/registerController");
const { loggedUser } = require("./controllers/loginController");
const { postNewOrder } = require("./controllers/newOrderController");
const { logoutFunction } = require("./controllers/logoutController");
const { getOrderFromDb } = require("./controllers/viewOrderController");
const { getAllOrders } = require("./controllers/allOrdersController");

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
    if (!req.cookies.userCookie) {
        res.send(false)
    } else {
        res.send(true)
    }
}

app.get("/home", (req, res) => {
    checkCookies(req, res)
});

app.post("/register", postNewProfile);


app.post("/login", loggedUser);

app.post("/newOrder", postNewOrder);

app.get("/logout", logoutFunction);

app.post("/newOrder", postNewOrder);
app.get("/overview", getOrderFromDb);
app.get("/viewallorders", getAllOrders);

connector.sync()
    .then(() => { app.listen(port, () => console.log(`Got ears on port ${port}`)) })
    .catch(error => console.error(`Could not sync connector with server ${error.stack}`))
