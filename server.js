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

// start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

// get data
app.get('/products', async (req, res) => {
    const productsList = await Product.find();
    res.json(productsList);
})

app.get('/blogs', async(req,res) => {
    const blogsList = await Blog.find();
    res.json(blogsList);
})

app.get('/users', async(req,res) => {
    const usersList = await User.find();
    res.json(usersList);
});

// User Methods
app.post('/findUser', async(req, res) => {
    const UserEmail = req.body.email;
    const UserPassword = req.body.password;
    try {
        const UserData = await User.find({ email: UserEmail, password: UserPassword })
        .then((data) => {
            return res.json(data);
        })
    } catch (err) {
        console.error('Error: ', err);
    };
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

app.post('/addProduct', async(req, res) => {
    try {
        const newProduct = new Product({
            id: req.body.id,
            name: req.body.name,
            price: req.body.price,
            images: req.body.images,
            descriptionShort: req.body.descriptionShort,
            sizes: req.body.sizes,
            colors: req.body.colors,            
            descriptionLong: req.body.descriptionLong,            
            additionalDetails: req.body.additionalDetails,            
            type: req.body.type,            
            materials: req.body.materials,
            promotion: req.body.promotion,
            stock: req.body.stock
        });
        await newProduct.save();
        return res.json();
    } catch (err) {
        console.error('Error: ', err);
    };
});

// create a temporary product object with the new details then send it through to mongo db to update
// https://www.geeksforgeeks.org/mongoose-findoneandupdate-function/
app.post('/updateProduct', async(req, res) => {
    var query = req.body.id;
    try{
         Product.updateOne({ id: query }, {
            $set: {
                id: req.body.id,
                name: req.body.name,
                price: req.body.price,
                images: req.body.images,
                descriptionShort: req.body.descriptionShort,
                sizes: req.body.sizes,
                colors: req.body.colors,            
                descriptionLong: req.body.descriptionLong,            
                additionalDetails: req.body.additionalDetails,            
                type: req.body.type,            
                materials: req.body.materials,
                promotion: req.body.promotion,
                stock: req.body.stock
            }
         })
         return res.json();
    } catch (err) {
        console.error('Error: ', err);
    };
});