import ProductSmall from "../../components/ProductsSmall";
import FilterButtons from "../../components/FilterButtons";
import './products.css';
import Boot from '../../assets/boot-store.jpg';

export default function Boots(props) {
    let products = props.props;
    let filtered = products.filter(item => item.type === "boot");

    return(
        <>
            <div className="row">
                <div className="parallax" style={{backgroundImage: `url(${Boot})`, minHeight: "40vh"}}>
                </div>
                <h2 className="my-4">Categories</h2>
                <FilterButtons />
            </div>
            <div className="row text-start">
                <h2 className="mb-4">Boots</h2>
                <p>Boots, made to be resiliant and weatherproof while remaining fashionable for all to see.</p>
                <p>Statement, function, and class all wrapped in one.</p>
                <ProductSmall props={filtered} limit={8} />
            </div>
        </>
        
    )
}