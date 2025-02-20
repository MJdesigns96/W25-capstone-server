import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    id: Number,
    name: String,
    price: Number,
    images: [{
        img1: String,
        img2: String,
        img3: String
    }],
    descriptionShort: String,
    sizes: [{
        7: Boolean,
        8: Boolean,
        9: Boolean,
        10: Boolean,
        11: Boolean
    }],
    colors: [{colorName : String}],
    descriptionLong: String,
    additionalDetails: [{
        materials: String,
        recommendedFor: String,
        madeIn: String,
        care: String,
        shipping: String
    }],
    type: String,
    materials:[{
        material1: String,
        material2: String,
        material3: String
    }],
    promotion: Number,
    stock: Number
});


export default mongoose.models.Product || mongoose.model('Product', productSchema);