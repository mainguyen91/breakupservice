const Profile = require('../database/models/Profile');
const { validationResult } = require("express-validator/check");
const bcrypt = require("bcrypt");

module.exports = {
    postNewProfile: (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            req.session.error = errors.array();
            res.redirect("/register");
        } else {
            bcrypt
                .hash(req.body.password, 10)
                .then(hashedPassword => {
                    Profile.findOrCreate({
                        where: {
                            email: req.body.email
                        },
                        defaults: {
                            name: req.body.name,
                            password: hashedPassword
                        }
                    })
                        .then(([results, created]) => {
                            if (created === false) {
                                req.flash(
                                    "errorEmail",
                                    "This email already exists! Choose another email or login"
                                );
                                res.redirect("/register");
                            } else {
                                res.send(results.dataValues);
                            }
                        })
                        .catch(error => {
                            console.error(
                                `Something went wrong when creating new profile: ${error.stack}`
                            );
                        });
                })
                .catch(error =>
                    console.error(
                        `Something went wrong when hashing password: ${error.stack}`
                    )
                );
        }
    }
}
