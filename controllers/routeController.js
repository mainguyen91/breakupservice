const axios = require("axios");
const Profile = require('../database/models/Profile');
const Order = require('../database/models/Order');
const bcrypt = require("bcrypt");
const {validationResult} = require("express-validator");

module.exports = {
    getHomePage: (req, res) => {
        res.render("index.html");
    },
    getRegistrationPage: (req, res) => {
        res.render("/register");
    },
    postNewProfile: (req, res) => {
        const errors = validationResult(req)

        if(!errors.isEmpty()){
            req.session.error = errors.array();
            res.redirect("/register");
          }else {
            bcrypt
            .hash(req.body.password, 10)
            .then(hashPassword => {
                // let newProfile = req.body;
                console.log(req.body);
                Profile.create({ 
                    name: req.body.name, 
                    email: req.body.email, 
                    password: hashPassword 
                })
                .then((result) => {
                    res.send(result.dataValues) //sending to client
                })
            })
            .catch(error => console.error(`Could not save user ${error.stack}`))
        }
    },
    
    postNewOrder: (req, res) => {
        let newOrder = req.body;
        Order.create({ nameClient: newOrder.nameClient, nameSo: newOrder.nameSo, service: newOrder.service, contactSo: newOrder.contactSo, situation: newOrder.situation, message: newOrder.message, orderExecuted: newOrder.orderExecuted })
            .then(results => {
                res.send(results.dataValues) //sending to client
            })
            .catch(error => console.error(`Could not save user ${error.stack}`))

    }
}