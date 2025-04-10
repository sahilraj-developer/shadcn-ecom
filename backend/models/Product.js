const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: String,
  price: Number,
  category: String,
  discount: Number,
  dateAdded: String,
  rating: Number,
  stock: Number,
  image: String
});

module.exports = mongoose.model('Product', productSchema);
