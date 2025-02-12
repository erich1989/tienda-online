const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define el esquema de Compañías
const CartSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    logoUrl: {
        type: String, // URL del logo de la empresa
        required: false, // No obligatorio
        default: '',
    },
    servicesCategory: [{
        type: Schema.Types.ObjectId,
        ref: 'ServiceCategory', // Relación con el esquema de Service
        default: [],
    }],
}, { timestamps: true });

// Crea el modelo de Company
const Cart = mongoose.model('Cart', CartSchema);

module.exports = Cart;
