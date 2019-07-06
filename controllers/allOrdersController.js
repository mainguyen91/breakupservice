const Order = require('../database/models/Order');

module.exports = {
    getAllOrders: (req, res) => {
        Order.findAll({
            where: { profileId: req.session.user.id }
        })
            .then(allOrder => {
                let results = allOrder.map(order => {
                    return {
                        id: order.dataValues.id,
                        createdAt: order.dataValues.createdAt,
                        nameClient: order.dataValues.nameClient,
                        nameSo: order.dataValues.nameSo,
                        service: order.dataValues.service,
                        contactSo: order.dataValues.contactSo,
                        status: order.dataValues.status
                    }
                })
                res.send(results)
            })
            .catch(error => console.error(`Something went wrong when finding order ${error.stack}`))
    }
}