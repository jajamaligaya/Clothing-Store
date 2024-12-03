const mongoose = require('mongoose');

// Define the schema for the product
const posSchema = new mongoose.Schema({
    productId: {
        type: String,Number,   // Use string to store product ID
        required: true, // productId is required
        unique: true,   // Ensure productId is unique
    },
    productname: {
        type: String,   // Product name
        required: true, // productname is required
    },
    price: {
        type: Number,   // Price of the product
        required: true, // price is required
    },
    stock: {
        type: Number,   // Quantity of product in stock
        required: true, // stock is required
        default: 0,     // Default stock is 0
    },
}, { timestamps: true });  // Timestamps to track createdAt and updatedAt

// Create the Product model based on the productSchema
const Product = mongoose.model('Product', posSchema);

module.exports = Product;

