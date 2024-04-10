const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Order = sequelize.define('Order', {
  // Simplified for this example
  id: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'users',
      key: 'id'
    }
  },
  total: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  order: {
    type: DataTypes.JSON // Consider a more relational approach for production
  },
  date: {
    type: DataTypes.BIGINT
  }
}, {
  tableName: 'orders',
  timestamps: false
});

module.exports = Order;
