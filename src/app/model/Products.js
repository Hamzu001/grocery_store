const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  imgUrl: String,
  title: String,
  description: String,
  price: Number,
  categorey: String,
});
module.exports =
  mongoose.models.products || mongoose.model("products", productSchema);
