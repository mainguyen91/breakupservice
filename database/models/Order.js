const { connector, Sequelize } = require('../configuration/dbConfig');
const Profile = require('../models/Profile');

const Order = connector.define('order', {
    nameClient: Sequelize.STRING,
    nameSo: Sequelize.STRING,
    service: Sequelize.STRING,
    contactSo: Sequelize.STRING,
    situation: Sequelize.TEXT,
    message: Sequelize.TEXT,
    status: { type: Sequelize.TEXT, defaultValue: 'being processed' }
});

Profile.hasMany(Order);
Order.belongsTo(Profile);

module.exports = Order;