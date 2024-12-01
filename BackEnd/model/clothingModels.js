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
        type: String, // This might be a string (e.g., 'Profit', 'Loss') based on your use case
        required: true, 
    },

}, { timestamps: true });

const productSchema = new mongoose.Schema({
    ProductName: { type: String, required: true },
    UnitInvestment: { type: Number, required: true },
    UnitPrice: { type: Number, required: true },
    QuantityinHand: { type: Number, required: true },
    QuantityinSold: { type: Number, required: true },
    TotalInvestment: { type: Number, required: true },
    TotalSale: { type: Number, required: true },
    ProfitStatus: { type: String, required: true },
}, { timestamps: true });  // Adding timestamps will automatically track createdAt and updatedAt

// Create the Product model
const Product = mongoose.model('Product', productSchema);


// Create the Product model based on the schema
const clothing = mongoose.model('clothing', clothingSchema);

module.exports = clothing;