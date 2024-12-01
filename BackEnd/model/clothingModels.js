// Import mongoose
const mongoose = require('mongoose');

// Define the clothing schema
const clothingSchema = new mongoose.Schema({
    ProductName: {
        type: String,
        required: true,
    },
    UnitInvestment: {
        type: Number,
        required: true,
    },
    UnitPrice: {
        type: Number,
        required: true,
    },
    QuantityinHand: {
        type: Number,
        required: true, 
    },
    QuantityinSold: {
        type: Number,
        required: true, 
    },
    TotalInvestment: {
        type: Number,
        required: true, 
    },
    TotalSale: {
        type: Number,
        required: true, 
    },
    ProfitStatus: {
        type: String, 
        required: true, 
    },
}, { timestamps: true });

// Create the Clothing model
const Clothing = mongoose.model('Clothing', clothingSchema);

// Export the model
module.exports = Clothing;
