var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/book-app");

// models/index.js
module.exports.Book = require("./books.js");
