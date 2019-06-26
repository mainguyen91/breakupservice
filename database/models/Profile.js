const { connector, Sequelize } = require('../configuration/dbConfig');

const Profile = connector.define('profile', {
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING
});

module.exports = Profile