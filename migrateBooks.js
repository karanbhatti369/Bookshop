const fs = require('fs');
const path = require('path');
const sequelize = require('./config/database'); // Adjust this path as necessary
const Book = require('./models/book'); // Adjust this path as necessary

async function migrateBooks() {
  try {
    const filePath = path.join(__dirname, 'bookshop-api/data/books.json');
    // Reading the JSON file
    const booksData = JSON.parse(fs.readFileSync(filePath, 'utf8')); // This line was missing

    for (const book of booksData) {
      await Book.create({
        name: book.name,
        author: book.author,
        category: book.category,
        publishing_house: book.publishing_house,
        price: book.price,
        discount: book.discount || 0, // Ensure there's a fallback for optional fields
        quantity: book.quantity,
        availability_date: book.availability_date,
        rating: book.rating || 0, // Default rating if not provided
        image: book.image
      });
    }

    console.log('Books migration completed successfully.');
  } catch (error) {
    console.error('Failed to migrate books data:', error);
  }
}

sequelize.sync().then(() => {
  console.log('Database synced.');
  migrateBooks().catch(console.error); // Added error handling for migrateBooks
});
