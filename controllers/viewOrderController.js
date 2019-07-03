const Order = require('../database/models/Order');

module.exports = {
    getOrderFromDb: (req, res) => {
        Order.findAll({
            limit: 1,
            where: { profileId: req.session.user.id },
            order: [['createdAt', 'DESC']]
        })
            .then(allOrder => {
                res.send(allOrder[0].dataValues)
            })
            .catch(error => console.error(`Something went wrong when finding order ${error.stack}`))
    }
}