const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    productName: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 50
    },
    productShortCode: {
        type: String,
        required: true,
        maxLength: 50,
        minLength: 3,
        unique: true
    },
    category: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        maxLength: 250,
        minLength: 3
    },
    imageUrl: {
        type: String,
    },
    isBestAcheived: {
        type: String,
    },
    createdDate: {
        type: Date,
        required:true,
        default: ()=> Date.now()
    },
    origin: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('Product', productSchema );