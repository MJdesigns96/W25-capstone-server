import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
//schemas
import Product from './schemas/products.js';
import Blog from './schemas/blogs.js';
import User from './schemas/users.js';

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

// make method for server to get users, update users, and delete users
app.get('/users', async(req,res) => {
    const usersList = await User.find();
    res.json(usersList);
});

app.post('/registerUser', async(req,res) => {
    try {
        const newUser = new User({
            id: req.body.id,
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
        await newUser.save();
        return res.json();
    } catch (err) {
        console.error('Error: ', err);
    };
});