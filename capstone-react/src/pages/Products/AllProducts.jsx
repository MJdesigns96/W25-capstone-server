import ProductSmall from "../../components/ProductsSmall";
import FilterButtons from "../../components/FilterButtons";
import './products.css';
import shoesStore from '../../assets/shoeCollection.jpg';

export default function AllProducts(props) {
    let products = props.props;

    return(
        <>
            <div className="row">
                <div className="parallax" style={{backgroundImage: `url(${shoesStore})`, minHeight: "40vh"}}>
                </div>
                <h2 className="my-4">Categories</h2>
                <FilterButtons />
            </div>
            <div className="row text-start">
                <h2 className="my-4">All Products</h2>
                <p>Below you will find our collection of footwear products to fit your every need and function.</p>
                <ProductSmall props={products} limit={8} />
            </div>
        </>
    )
}