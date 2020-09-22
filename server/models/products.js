
const mongoose = require('mongoose');

const ProdSchema = new mongoose.Schema({
    prodClass: {
        type: String
    },
    prodType: {
        type: String
    },
    prodName: {
        type: String
    },
    prodDesc: {
        type: String
    },
    producer: {
        type: String
    },
    price: {
        type: Number
    }
}, {timestamps: true });

module.exports.Product = mongoose.model('Product', ProdSchema);