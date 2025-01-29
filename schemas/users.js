import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    id: Number,
    name: String,
    email: String,
    password: String,
    shipping: String,
    postal: String
},
{
    collection: 'accounts'
});

export default mongoose.models.User || mongoose.model('User', userSchema);