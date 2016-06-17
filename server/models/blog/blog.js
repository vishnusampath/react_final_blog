var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Defining the mongoose schema for Blog_DB collection
var blogSchema   = new Schema({
    author_name: String,
    title: String,
    text: String,
    poster: String,
    topic: String
});

module.exports = mongoose.model('Blog_Model', blogSchema, 'Blog_DB');
