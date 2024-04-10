const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('bookshop', 'bookshop_user', 'your_password_here', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;
