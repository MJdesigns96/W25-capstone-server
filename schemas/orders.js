import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    id: Number,
    userId: Number,
    items: [{
        id: Number,
        name: String,
        price: Number
    }],
    total: Number,
    paid: Boolean,
    shipped: Boolean,
    completed: Boolean,
    email: String,
    firstName: String,
    lastName: String,
    address: String,
    city: String,
    postal: String,
    province: String,
    shipping: String,
    paymentMethod: String
},
{
    collection: 'orders'
});

export default mongoose.models.Order || mongoose.model('Order', orderSchema);