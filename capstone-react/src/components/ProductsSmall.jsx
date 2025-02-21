import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ProductSmall (props) {
    // //render data from mongodb server and express. Transfer to a component later on.
    const [products, setProducts] = useState(props.props);

    // console.log(props);

    const addToCart = (entry) => {
        let cart = {};
        //currently the localstorage is overwriting the cart
        if (localStorage.getItem('cart') === null) {
            cart[entry.id] = { details: entry, qty: 1, size: itemSize };
            const strObj = JSON.stringify(cart);
            localStorage.setItem('cart', strObj);
        } else {
            let strObjFromStorage = localStorage.getItem('cart');
            cart = JSON.parse(strObjFromStorage);
            console.log(cart);
            console.log(cart[entry.id]);
            if (cart[entry.id] === undefined) {
                cart[entry.id] = { details: entry, qty: 1, size: itemSize };
                const strObj = JSON.stringify(cart);
                localStorage.setItem('cart', strObj);
            } else if (cart[entry.id].size !== itemSize) {
                let count = Object.keys(cart).length + 1;
                let cartProdId = cart[entry.id].details.id
                let keyForMultiple = `${cartProdId}V${count}`;
                cart[keyForMultiple] =  { details: entry, qty: 1, size: itemSize };
                const strObj = JSON.stringify(cart);
                localStorage.setItem('cart', strObj);
            } else {
                cart[entry.id].qty++;
                const strObj = JSON.stringify(cart);
                localStorage.setItem('cart', strObj);
            }
        }
        var toastElList = [].slice.call(document.querySelectorAll('.toast'))
        var toastList = toastElList.map(function(toastEl) {
            return new bootstrap.Toast(toastEl)
        })
        toastList.forEach(toast => toast.show())
        console.log(cart);
    }

    //create an object that holds the sizes of each item
    let itemSize;

    const handleSizes = (e) => {
        //get the id for the radio button
        let preSplit = e.target.id;
        //split the id into characters
        let split = preSplit.split("");
        //remove the number at the end of id
        split.pop();
        //join the id back together to a string
        let join = split.join("");
        itemSize = join;
    }

    let count = 0;
    const limit = props.limit;

    const productsList = products?.filter((entry, index) => index < limit).map(entry => (
        <div key={entry.id} className='card col-6'>
            <Link to={`/products/all-products/${entry.id}`} style={{textDecoration: "none", color:"black"}}>
                <img src={entry.images[0].img1} alt="product image" loading="lazy" className='w-100 h-75 rounded' style={{objectFit: "cover", maxHeight: "40vh"}}/>
                <div className='card-body text-start'>
                    <h1 className='card-title'>{entry.name}</h1>
                    <p className='card-text'>{entry.descriptionShort}</p>
                    <h3 className='card-text'>${entry.price}</h3>
                </div>
            </Link>
            <div className="card-footer">
                <div className='card-text'>
                    <form>
                        <div className="card-text row mb-3">
                            <p className='lead'>Sizes:</p>
                            {entry.sizes.map(size => {
                                let temp = [];
                                for(const [key,value] of Object.entries(size)) {
                                    if (value && key !== "_id") {
                                        temp.push(key);
                                    }
                                }
                                count++;
                                return temp.map(size => 
                                    (
                                        <h5 className='col'>
                                            <input type="radio" id={`${size}${count}`} name={`item${count}`} onChange={handleSizes} />
                                            <span> </span>
                                            <label htmlFor={`${size}${count}`}>{size}</label>
                                        </h5>
                                    )
                                )
                            })}
                        </div>
                        {/* <p className='card-text'>Promotion: {entry.promotion}%</p>
                        <p className='card-text'>Stock: {entry.stock} units</p> */}
                        <button type='button' className='btn btn-secondary' onClick={() => addToCart(entry)}>Add to Cart</button>
                    </form>
                </div>               
            </div>           
        </div>
    ));

    return (
        <div className="col mb-4">
            <div className="row">
                {productsList}
            </div>
        </div>
    )
}