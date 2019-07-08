const Order = require('../database/models/Order');

module.exports = {
    postNewOrder: (req, res) => {
        let newOrder = req.body;
        Order.create({ nameClient: newOrder.nameClient, nameSo: newOrder.nameSo, service: newOrder.service, contactSo: newOrder.contactSo, situation: newOrder.situation, message: newOrder.message, status: newOrder.status, profileId: req.session.user.id })
            .then(results => {
                console.log(results.dataValues)
                res.send(results.dataValues)
            })
            .catch(error => console.error(`Could not save user ${error.stack}`))

    }
}