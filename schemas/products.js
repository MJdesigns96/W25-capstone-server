import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    id: Number,
    name: String,
    price: Number,
    images: {
        data: Buffer, 
        contentType: String
    },
    descriptionShort: String,
    sizes: [{
        xSmall: Boolean,
        small: Boolean,
        medium: Boolean,
        large: Boolean,
        xLarge: Boolean
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