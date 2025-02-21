import './App.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from './components/ScrollTotop';
//layout tabs
import Layout from './pages/Layout';
import Home from './pages/Home';
import Brand from './pages/Brand';
//Blog filter Pages
import Blogs from './pages/Blogs';
import ShortBlogs from './pages/Blogs/ShortBlogs';
import BlogPost from './pages/Blogs/BlogPost';
//Product filter Pages
import Products from './pages/Products/index';
import AllProducts from './pages/Products/AllProducts';
import Sandals from './pages/Products/Sandals';
import Boots from './pages/Products/Boots';
import Sneakers from './pages/Products/Sneakers';
import ProductDetails from './components/ProductDetail';
//Account filter Pages
import Accounts from './pages/Account';
import Details from './pages/Account/Details'
import Register from './pages/Account/Register';
import Login from './pages/Account/Login';
//checkout page
import Checkout from './pages/Checkout/index';
import Cart from './pages/Checkout/Cart';
import CheckoutSuccess from './pages/Checkout/CheckoutSuccess';
//Admin pages
import Admin from './pages/Admin';
import Dashboard from './pages/Admin/Dashboard';
//products
import ListProducts from './pages/Admin/ListProducts';
import AddProduct from './pages/Admin/AddProduct';
import UpdateProduct from './pages/Admin/UpdateProduct';
import DeleteProduct from './pages/Admin/DeleteProduct';
//list users and orders
import ListUsers from './pages/Admin/ListUsers';
import ListOrders from './pages/Admin/ListOrders';
//blogs
import ListBlogs from './pages/Admin/ListBlogs';
import AddBlog from './pages/Admin/AddBlogs';
import UpdateBlog from './pages/Admin/UpdateBlog';
import DeleteBlog from './pages/Admin/DeleteBlog';

//import state from server
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function App() {
  //render data from mongodb server and express. Transfer to a component later on.
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // axios.get('http://localhost:8888/users')
    axios.get('http://https://capstone-ten-wine.vercel.app/users')
    .then(response => setUsers(response.data))
    .catch(error => console.error(error))
  }, []);

  useEffect(()=> {
      // axios.get('http://localhost:8888/products')
      axios.get('https://capstone-ten-wine.vercel.app/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
      // axios.get('http://localhost:8888/blogs')
      axios.get('http://https://capstone-ten-wine.vercel.app/blogs')
      .then(response => setBlogs(response.data))
      .catch(error => console.error(error))
  }, []);

  useEffect(() => {
    // axios.get('http://localhost:8888/orders')
    axios.get('http://https://capstone-ten-wine.vercel.app/orders')
    .then(response => setOrders(response.data))
    .catch(error => console.error(error))
  }, []);

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Landing page */}
            <Route index element={<Home props={products} />} />
            {/* Product pages */}
            <Route path="products" element={<Products props={products} />}>
              <Route path='all-products' element={<AllProducts props={products} />}/>
              <Route path='all-products/:productId' element={<ProductDetails props={products}/>} />
              <Route path='sandals' element={<Sandals props={products} />}/>
              <Route path='boots' element={<Boots props={products} />}/>
              <Route path='sneakers' element={<Sneakers props={products} />}/>
            </Route>
            {/* About section pages */}
            <Route path="brand" element={<Brand />} />
            <Route path='blogs' element={<Blogs props={blogs} />}>
              <Route path="short-blogs" element={<ShortBlogs props={blogs}/>}/>
              <Route path=':blogId' element={<BlogPost props={blogs} />} />
            </Route>
            {/* Account pages */}
            <Route path="accounts" element={<Accounts props={users} />}>
              <Route path="details" element={<Details />} />
              <Route path='login' element={<Login />} />
              <Route path="register" element={<Register props={users} />} />
            </Route>
            {/* checkout page */}
            <Route path="checkout" element={<Checkout props={orders} />}>
              <Route path="cart" element={<Cart props={orders} />} />
              <Route path="success/:orderId" element={<CheckoutSuccess props={orders} />} />
            </Route>
            {/* admin pages */}
            <Route path="admin"element={<Admin props={products} />}>
              <Route path='dashboard' element={<Dashboard />} />
              {/* product admin features */}
              <Route path='list-products' element={<ListProducts props={products} />} />
              <Route path='add-product' element={<AddProduct props={products} />} />
              <Route path='update-product/:productId' element={<UpdateProduct props={products} />} />
              <Route path='delete-product/:productId' element={<DeleteProduct props={products} />} />
              {/* order admin features */}
              <Route path='users-list' element={<ListUsers props={users} />}/>
              <Route path='orders-list' element={<ListOrders props={orders} />} />
              {/* blog admin features */}
              <Route path='blogs-list' element={<ListBlogs props={blogs} />} />
              <Route path='add-blog' element={<AddBlog props={blogs} />} />
              <Route path='update-blog/:blogId' element={<UpdateBlog props={blogs} />} />
              <Route path='delete-blog/:blogId' element={<DeleteBlog props={blogs} />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
