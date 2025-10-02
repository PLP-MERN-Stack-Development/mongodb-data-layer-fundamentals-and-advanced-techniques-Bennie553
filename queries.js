// 1. Find all books in a specific genre
db.books.find({ genre: "Programming" });

// 2. Find books published after 2015
db.books.find({ published_year: { $gt: 2015 } });

// 3. Find books by a specific author
db.books.find({ author: "Robert C. Martin" });

// 4. Update the price of a specific book
db.books.updateOne(
  { title: "Clean Code" },
  { $set: { price: 60 } }
);

// 5. Delete a book by its title
db.books.deleteOne({ title: "The Pragmatic Programmer" });

// 🔹 Advanced queries
// Books in stock AND published after 2010
db.books.find({ in_stock: true, published_year: { $gt: 2010 } });

// Projection: only show title, author, price
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 });

// Sort by price ascending
db.books.find().sort({ price: 1 });

// Sort by price descending
db.books.find().sort({ price: -1 });

// Pagination (page 1, 5 per page)
db.books.find().skip(0).limit(5);

// Pagination (page 2, 5 per page)
db.books.find().skip(5).limit(5);

// Average price of books by genre
db.books.aggregate([
  { $group: { _id: "$genre", avgPrice: { $avg: "$price" } } }
]);

// Author with the most books
db.books.aggregate([
  { $group: { _id: "$author", count: { $sum: 1 } } },
  { $sort: { count: -1 } },
  { $limit: 1 }
]);

// Group books by decade and count
db.books.aggregate([
  {
    $group: {
      _id: { $subtract: [ { $divide: ["$published_year", 10] }, { $mod: [ { $divide: ["$published_year", 10] }, 1 ] } ] },
      count: { $sum: 1 }
    }
  }
]);

// Index on title
db.books.createIndex({ title: 1 });

// Compound index on author + published_year
db.books.createIndex({ author: 1, published_year: -1 });

// Check query performance
db.books.find({ title: "Clean Code" }).explain("executionStats");
