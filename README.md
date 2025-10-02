# MongoDB Queries – Week 1 Assignment

This project contains MongoDB queries for **CRUD operations, advanced queries, aggregation pipelines, and indexing** as part of the Week 1 MongoDB Fundamentals assignment.

---

##  Requirements

Before running the queries, make sure you have:

- [MongoDB Community Edition](https://www.mongodb.com/try/download/community) OR [MongoDB Atlas](https://www.mongodb.com/atlas/database)
- [MongoDB Shell (mongosh)](https://www.mongodb.com/docs/mongodb-shell/)
- A database called **plp_bookstore**
- A collection called **books** populated with at least 10 documents (use the provided `insert_books.js` script)

---

##  Files

- `queries.js` → Contains all MongoDB queries (CRUD, advanced queries, aggregation, and indexing)

---

## Running the Queries

### 1. Start MongoDB
If running locally:
```bash
net start MongoDB   # Windows (run as Administrator)
or:

bash
Copy code
mongod --dbpath "C:\data\db"
2. Open MongoDB Shell
bash
Copy code
mongosh
3. Switch to the Database
js
Copy code
use plp_bookstore
4. Load the Queries
From inside the MongoDB shell:

js
Copy code
load("queries.js")
This will execute all queries saved in the file.

Queries Included
CRUD Operations

Find all books in a genre

Find books published after a given year

Find books by a specific author

Update the price of a book

Delete a book by title

Advanced Queries

Find books in stock and published after 2010

Projection (only title, author, price)

Sorting by price (ascending & descending)

Pagination (skip/limit)

Aggregation Pipelines

Average price of books by genre

Find the author with the most books

Group books by decade and count them

Indexing

Create an index on title

Create a compound index on author + published_year

Use explain() to check query performance

Expected Output
A functioning MongoDB database called plp_bookstore

A books collection with sample data

Queries that demonstrate:

CRUD operations

Filtering, projection, sorting, and pagination

Aggregation and data transformation

Indexing with performance analysis