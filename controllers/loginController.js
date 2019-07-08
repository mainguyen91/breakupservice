const Profile = require('../database/models/Profile');
const bcrypt = require("bcrypt");

module.exports = {
    loggedUser: (req, res) => {
        Profile
            .findOne({ where: { email: req.body.email } })
            .then(foundUser => {
                bcrypt
                    .compare(req.body.password, foundUser.dataValues.password)
                    .then(results => {
                        if (req.body.email !== null && results) {
                            req.session.user = foundUser.dataValues;
                            res.send(req.session.user);
                        } else {
                            console.log("Something went wrong when loggin in");
                            res.send("/login");
                        }
                    })
                    .catch(error => console.error(`Couldn't login: ${error.stack}`));
            })
            .catch(error => console.error(`Something went wrong when comparing password: ${error.stack}`));
    }
}