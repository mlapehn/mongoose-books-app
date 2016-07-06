// book.js
var mongoose = require('mongoose');
	Schema = mongoose.Schema;

var BookSchema = new Schema({
     title: String,
     author: String,
     image: String,
     release_date: String
});

// book.js
var Book = mongoose.model('Book', BookSchema);





// This should be last
module.exports = Book;