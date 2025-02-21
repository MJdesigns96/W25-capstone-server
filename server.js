import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
//schemas
import Product from './schemas/products.js';
import Blog from './schemas/blogs.js';
import User from './schemas/users.js';
import Order from './schemas/orders.js';

const app = express();
const PORT = process.env.PORT || 8888;

app.use(cors());
app.use(express.json());
app.use(cors({
    origin: 'capstone-ten-wine.vercel.app'
  }));

// connect to the DB
const dbUrl = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPWD}@${process.env.DBHOST}`;

mongoose.connect(dbUrl);

// start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

// get data
app.get('/products', async (req, res) => {
    const productsList = await Product.find().sort({id: "asc"});
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

app.get('/orders', async(req, res) => {
    const ordersList = await Order.find();
    res.json(ordersList);
})

// User Methods
app.post('/findUser', async(req, res) => {
    const UserEmail = req.body.email;
    const UserPassword = req.body.password;
    try {
        const UserData = await User.find({ email: UserEmail, password: UserPassword })
        .then((data) => {
            if(data.length === 1) {
                return res.json(data);
            } else {
                let response = false;
                return res.json(response);
            }            
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

//product admin methods
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
        .catch((err) => {
            console.log(err)
         })
         return res.json();
    } catch (err) {
        console.error('Error: ', err);
    };
});

app.post('/deleteProduct', async(req, res) => {
    var deleteProductId = req.body.id;
    try {
        let deleted = await Product.findOneAndDelete({id: deleteProductId});
        console.log(deleted.name, "has been deleted.")
        return res.json();
    } catch (err) {
        console.error('Error: ', err);
    };
});

//blog admin methods
app.post('/addBlog', async(req, res) => {
    // console.log(req.body);
    try {
        const newBlog = new Blog({
            id: req.body.id,
            title: req.body.title,
            descriptionShort: req.body.descriptionShort,
            text: req.body.text
        });
        await newBlog.save();
        return res.json();
    } catch (err) {
        console.error('Error: ', err);
    };
});

app.post('/updateBlog', async(req, res) => {
    var query = req.body.id;
    try{
        Blog.updateOne({ id: query }, {
            $set: {
                id: req.body.id,
                title: req.body.title,
                descriptionShort: req.body.descriptionShort,
                text: req.body.text
            }
         })
        .catch((err) => {
            console.log(err)
         })
         return res.json();
    } catch (err) {
        console.error('Error: ', err);
    };
})

app.post('/deleteBlog', async(req,res) => {
    var deleteBlogId = req.body.id;
    try {
        let deleted = await Blog.findOneAndDelete({id: deleteBlogId});
        console.log(deleted.title, "has been deleted.")
        return res.json();
    } catch (err) {
        console.error('Error: ', err);
    };
})

//send orders to db
app.post('/newOrder', async(req,res) => {
    try {
        const newOrder = new Order({
            id: req.body.orderId,
            userId: req.body.userId,
            items: req.body.items,
            total: req.body.total,
            paid: req.body.paid,
            shipped: req.body.shipped,
            completed: req.body.completed,
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            address: req.body.address,
            city: req.body.city,
            postal: req.body.postal,
            province: req.body.province,
            shipping: req.body.shipping,
            paymentMethod: req.body.paymentMethod
        });
        await newOrder.save();
        return res.json();
    } catch (err) {
        console.error('Error: ', err);
    };
});