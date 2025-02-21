import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function DeleteProduct(props) {
    const { productId } = useParams();

    let productList = props.props;
    let chosenProduct;

    //use history to redirect
    let navigateTo = useNavigate();

    productList.map(entry => {
        if (entry.id == productId) {
            chosenProduct = entry;
        }
    });

    const [product, setProduct] = useState(chosenProduct);

    const deleteProduct = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8888/deleteProduct', product);
            console.log('Item has been deleted', response.data);
            navigateTo('/admin/list-products');
            navigateTo(0);
        } catch (err) {
            console.log("Error: ", err);
        }
    }

    return (
        <div className="row">
            <div className="col">
                <div className="row">
                    <div className="col-2 my-3">
                        <button type="button" className="btn btn-secondary" onClick={() => navigateTo(-1)}>Back</button>
                    </div>
                </div>
                <div className="row">
                    <h1>Are you sure?</h1>
                </div>
                <div className="row">
                    <div className="col">
                        <p>We just want to confirm that you want to delete:</p>
                        <h2>{product.name}</h2>
                    </div>
                    <div className="row my-5">
                        <div className="col">
                            <button type="button" className="btn btn-danger" onClick={deleteProduct}>Delete</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}