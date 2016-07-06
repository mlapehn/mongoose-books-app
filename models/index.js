var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/book-app");

module.exports.Book = require("./book.js");
<<<<<<< HEAD
module.exports.Author = require("./authur.js");
=======
module.exports.Author = require("./author.js");
>>>>>>> d11549b3b171e5175cc5b02d686327185474928d
