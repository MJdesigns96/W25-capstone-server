import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CheckoutButton from "../../components/CheckoutButton";

export default function Cart (props) {
    //initialize states
    const [cart, setCart] = useState();
    
    let items = {...localStorage};
    let userCart;

    // console.log(items);
    //create object for payment details
    let paymentDetails = {
        email: items.userEmail ? items.userEmail : "",
        firstName: items.userName ? items.userName : "",
        lastName: "",
        address: "",
        city: "",
        postal: "",
        province: "",
        shipping: "",
        paymentMethod: ""
    }
    //initialize state
    const [payment, setPayment] = useState(paymentDetails);
    //Find a way to take the local storage obj and make elements from them
    if (items.cart === undefined) {
        userCart = (
            <div>
                <h3>There is nothing in your cart.</h3>
            </div>
        )
    } else {
        let strObjFromStorage = items.cart;
        let cartObj = JSON.parse(strObjFromStorage);
        useEffect(() => {
            let temp = [];
            for (const [key, value] of Object.entries(cartObj)) {
                temp.push(value);
            }
            setCart(temp);
        }, []);
    }

    // console.log(cart);

    let subtotal = 0;
    let taxes = 0;
    let shipping = 0;
    let total = 0;

    let checkoutItems = () => {
        // get item details from localstorage
        userCart = cart?.map(entry => (
            <div className="card mb-2 p-0" style={{maxWidth: "50vw"}} key={cart.indexOf(entry) +1}>
                <div className="row d-flex align-items-center g-0">
                    <div className="col-md-4">
                        <img src={entry.details.images[0].img1} alt="product image" className="object-fit-cover rounded img-thumbnail d-flex justify-content-start" style={{maxHeight: "20vh"}} />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body text-start">
                            <h4 className="card-title">{entry.details.name}</h4>
                            <p className="card-text">Size: {entry.size}</p>
                            <p className="card-text">Quantity: {entry.qty}</p>
                            <h5 className="card-text">Price: ${entry.details.price.toFixed(2)}</h5>
                        </div>
                    </div>
                </div>
            </div>
        ));
        
        //set subtotal
        cart?.map(entry => 
            subtotal += (entry.details.price * entry.qty)
        );
        taxes = subtotal * 0.13;
        total = subtotal + shipping + taxes;
    }    
    checkoutItems();

    //use history to redirect
    let navigateTo = useNavigate();
    
    const clearCart = () => {
        localStorage.removeItem("cart");
        navigateTo(0);
    }

    let rightSide, leftSide;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPayment({ ...payment, [name] : value});
    };
    //set an object for payment details
    const setPaymentDetails = (e) => {
        
    }

    if (items.cart === undefined) {
        leftSide = "";
        rightSide = (
            <div>
                <h2>There is nothing in your Cart</h2>
            </div>
        )
    } else {
        leftSide = (
            <div className="col px-5 pt-5">
                <form action={setPaymentDetails}>
                    <h4 className="text-start">Contact</h4>
                    <div className="input-group">
                        <label htmlFor="email" className="input-group-text">Email: </label>
                        <input type="text" name="email" id="email" className="form-control" value={items.userEmail ? items.userEmail : ""} onChange={handleChange} />
                    </div>
                    <h4 className="text-start mt-3">Shipping Address</h4>
                    <div className="row">
                        <div className="input-group col">
                            <label htmlFor="firstName" className="input-group-text">First Name: </label>
                            <input type="text" name="firstName" id="firstName" className="form-control" value={items.userName ? items.userName : ""} onChange={handleChange}/>
                        </div>
                        <div className="input-group col">
                            <label htmlFor="lastName" className="input-group-text">Last Name: </label>
                            <input type="text" name="lastName" id="lastName" className="form-control" onChange={handleChange} />
                        </div>
                    </div>
                    <div className="input-group">
                        <label htmlFor="address" className="input-group-text">Address: </label>
                        <input type="text" name="address" id="address" className="form-control" onChange={handleChange} />
                    </div>
                    <div className="row">
                        <div className="input-group col">
                            <label htmlFor="city" className="input-group-text">City: </label>
                            <input type="text" name="city" id="city" className="form-control" onChange={handleChange} />
                        </div>
                        <div className="input-group col">
                            <label htmlFor="postal" className="input-group-text">Postal code: </label>
                            <input type="text" name="postal" id="postal" className="form-control" onChange={handleChange} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-group col">
                            <label htmlFor="province" className="input-group-text">Province: </label>
                            <select name="province" id="province" class="form-select" aria-label="select province"  onChange={handleChange}>
                                <option selected>Select</option>
                                <option value="ab">Alberta</option>
                                <option value="bc">British Columbia</option>
                                <option value="mb">Manitoba</option>
                                <option value="nb">New Brunswick</option>
                                <option value="nl">Newfoundland and Labrador</option>
                                <option value="nt">Northwest Territories</option>
                                <option value="ns">Nova Scotia</option>
                                <option value="nu">Nunavut</option>
                                <option value="on">Ontario</option>
                                <option value="pe">Prince Edward Island</option>
                                <option value="qc">Quebec</option>
                                <option value="sk">Saskatchewan</option>
                                <option value="yt">Yukon</option>
                            </select>
                        </div>
                    </div>
                    <h4 className="text-start mt-3">Method</h4>
                    <div className="input-group">
                        <select class="form-select" id="shipping" name="shipping" aria-label="select shipping"  onChange={handleChange}>
                            <option selected>Shipping...</option>
                            <option value="free">Free (3-5 Business Days)</option>
                            <option value="express">$12.99(Express 1-2 Business Days)</option>
                        </select>
                    </div>
                    <h4 className="text-start mt-3">Payment</h4>
                    <div className="input-group">
                        <select class="form-select" id="paymentMethod" name="paymentMethod" aria-label="payment"  onChange={handleChange}>
                            <option selected>Payment...</option>
                            <option value="cash">Cash</option>
                        </select>
                    </div>
                </form>
            </div>
        )
        rightSide = (
            <div className="col bg-secondary-subtle px-5 pt-5">
                <div className="row mb-4">
                    <h3>Cart</h3>
                </div>
                <div className="row">
                    {userCart}
                </div>
                <hr />
                <div className="row">
                    <div className="input-group">
                        <input type="text" name="discount" id="discount" className="form-control" placeholder="Enter your Discount or Gift code here" />
                        <button className="btn btn-outline-secondary" type="button">Apply</button>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col text-end mx-5">
                        <h4 className="lead">Subtotal: ${subtotal.toFixed(2)}</h4>
                        <h4 className="lead">Shipping: 
                            <span> </span>
                            {
                                shipping === 0 ? "Free" : "$ "+ shipping.toFixed(2)
                            }
                        </h4>
                        <h4 className="lead">Taxes: ${taxes.toFixed(2)}</h4>
                        <h3 className="mt-4 display-4">Total: ${total.toFixed(2)}</h3>
                    </div>
                </div>
            </div>
        )
    }

    //variables to pass down to checkout button
    let orderId, userId, checkoutCart;

    if (items.cart !== undefined ) {
        orderId = props.props[props.props.length-1].id + 1;
        userId = items.userId;
        checkoutCart = JSON.parse(items.cart)
        // console.log(checkoutCart);
    }

    return (
        <>
            <div className="row">
                <div className="col pt-5">
                    { items.cart === undefined ? <h2>Oops?!</h2> : <h3>Payment Details</h3> }
                    {leftSide}
                </div>
                {rightSide}
            </div>
            { items.cart === undefined ? 
                <div className="row my-5">
                    <div className="col">
                        <button type="button" className="btn btn-primary" onClick={() => navigateTo('/products/all-products')}>Back to Products</button>
                    </div>
                </div> 
            : "" }
            { items.cart === undefined ? "" : <CheckoutButton orderId={orderId} userId={userId} items={checkoutCart} total={total} payment={payment} /> }
            { items.cart === undefined ? "" : <button type="button" className="btn btn-primary mb-5" onClick={clearCart}>Clear Cart</button> }
        </>
    )
}