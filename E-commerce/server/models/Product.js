// server/models/Product.js

import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  image: String,
  type: String,
});

export default mongoose.model('Product', productSchema);
