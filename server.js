import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
//schemas
import Product from './schemas/products.js';
import Blog from './schemas/blogs.js';

const app = express();
const PORT = process.env.PORT || 8888;

app.use(cors());
app.use(express.json());

// connect to the DB
const dbUrl = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPWD}@${process.env.DBHOST}`;

mongoose.connect(dbUrl);

// define routes and middleware
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

app.get('/products', async (req, res) => {
    const productsList = await Product.find();
    res.json(productsList);
})

app.get('/blogs', async(req,res) => {
    const blogsList = await Blog.find();
    res.json(blogsList);
})
