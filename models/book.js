var mongoose = require('mongoose'),
  Schema = mongoose.Schema;
<<<<<<< HEAD

var BookSchema = new Schema({
  title: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'Author'
  },
  image: String,
  releaseDate: String
=======
  Author = require('./author');

var BookSchema = new Schema({
     title: String,
     author: {type: Schema.Types.ObjectId, ref: 'Author'},
     image: String,
     releaseDate: String,
     characters: [String]
>>>>>>> d11549b3b171e5175cc5b02d686327185474928d
});

var Book = mongoose.model('Book', BookSchema);
module.exports = Book;
