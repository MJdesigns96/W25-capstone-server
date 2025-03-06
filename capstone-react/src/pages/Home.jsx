import ProductSmall from "../components/ProductsSmall";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import LandingAboutUs from "../components/LandingAboutUs";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = (props) => {
    const [homePageProducts, setHomePageProducts] = useState([]);
    useEffect(() => {
        // console.log(props);
        setHomePageProducts(props);
    }, []);

    console.log(homePageProducts);
    const passProductsProps = (
        homePageProducts.props != undefined ?
            <ProductSmall props = {homePageProducts.props} limit = {4} /> : ""
    )

    return (
        <> 
            <div className='row'>
                <div className='col'>
                    <div className="row">
                        <Hero />
                    </div>
                    <div className="row mb-5">
                        <Categories />
                    </div>
                    <div className='row mb-5 text-start'>
                        <h3>Products</h3>
                        <small className="mb-3">Some of our featured products</small>
                        {passProductsProps}
                    </div>
                    <div className="row">
                        <LandingAboutUs />
                    </div>
                </div>
            </div>
        </>
);
  };
  
  export default Home;