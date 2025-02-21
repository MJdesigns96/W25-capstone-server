import { useParams } from "react-router-dom"
import ProductLarge from "./ProductLarge";

export default function ProductDetails(props) {
    const { productId } = useParams();
    const products = props.props;
    const thisProduct = products.filter(item => item.id == productId);

    return(
        <>
            <ProductLarge props={thisProduct} />
        </>
    )
}