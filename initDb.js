// initDb.js
const sequelize = require('./config/database'); // Adjust the path as necessary
const User = require('./models/user'); // Adjust path as necessary
const Book = require('./models/book'); // Adjust path as necessary
const Order = require('./models/order'); // Adjust path as necessary

sequelize.sync({ alter: true }).then(() => {
  console.log('Database & tables created or updated!');
}).catch((error) => {
  console.error('Failed to create or update database tables:', error);
});
