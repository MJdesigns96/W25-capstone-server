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
    completed: Boolean
},
{
    collection: 'orders'
});

export default mongoose.models.Order || mongoose.model('Order', orderSchema);