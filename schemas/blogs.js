import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    id: Number,
    title: String,
    descriptionShort: String,
    images: {
        data: Buffer,
        contentType: String
    },
    text: String
});

export default mongoose.models.Blogs || mongoose.model('Blog', blogSchema);