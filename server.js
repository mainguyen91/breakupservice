const express = require("express");

const app = express();
const port = process.env.PORT || 5000;

const {
    getHomePage,
    postNewProfile,
    postNewOrder
} = require("./controllers/routeController");

const { connector } = require('./database/configuration/dbConfig');


app.get("/", getHomePage);
app.post("/profile", postNewProfile);
app.post("/profile/newOrder", postNewOrder);

connector.sync({ force: true })
    .then(() => { app.listen(port, () => console.log(`Got ears on port ${port}`)) })
    .catch(error => console.error(`Could not sync connector with server ${error.stack}`))