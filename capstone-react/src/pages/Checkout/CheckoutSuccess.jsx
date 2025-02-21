import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import axios from "axios";

export default function CheckoutSuccess (props) {
    const [order, setOrder] = useState(props.props)
    const lastOrder = order[order.length - 1];

    useEffect(() => {
        axios.get('http://localhost:8888/orders')
        .then(response => setOrder(response.data))
        .catch(error => console.error(error))
    }, []);
    
    const navigateTo = useNavigate();

    const items = {...localStorage};
    localStorage.removeItem('cart');

    return (
        <>
            <div className="row">
                <div className="col">
                    <div className="row my-5">
                        <h1>Checkout Success!</h1>
                    </div>
                    <div className="row">
                        <h3>
                            Order Number: #{lastOrder.id}
                        </h3>
                    </div>
                    <div className="row">
                        <p>Your order has been received! Please expect an email from us to notify you when your order ships.</p>
                    </div>
                    <div className="row">
                        <h4>
                            Your total was: ${lastOrder.total.toFixed(2)}
                        </h4>
                    </div>
                    <div className="row my-5">
                        <div className="col">
                            <button type="button" className="btn btn-primary" onClick={() => navigateTo('/products/all-products')}>Back to Products</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}