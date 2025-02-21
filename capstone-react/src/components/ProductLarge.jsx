import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProductLarge (props) {
    //set props
    const [product, setProduct] = useState(props.props[0]);

    //have method to add item to localstorage cart
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

    //methods and variables needed to get the size of the item before adding it to cart obj
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

    //carousel images will render if there are multiple images
    const images = (
        <div id="carouselExampleIndicators" className="carousel slide bg-dark rounded" style={{height:"50vh"}}>
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={product.images[0].img1} alt="img 1" loading="lazy" className='w-100 h-75 rounded' style={{objectFit: "cover", maxHeight: "50vh"}} />
                </div>
            {
                product.images[0].img2 ? 
                    <div className="carousel-item">
                        <img src={product.images[0].img2} alt="img 2" loading="lazy" className='w-100 h-75 rounded' style={{objectFit: "cover", maxHeight: "50vh"}} />
                    </div>
                : ""
            }
            {
                product.images[0].img3 ? 
                <div className="carousel-item">
                    <img src={product.images[0].img3} alt="img 3" loading="lazy" className='w-100 h-75 rounded' style={{objectFit: "cover", maxHeight: "50vh"}} />
                </div>
                : ""
            }
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )

    const productsItem = (
        <>
            <div className="row">
                <div className="col px-0">
                    <div key={product.id} className='card' style={{height:"50vh"}}>
                        <div className='card-body text-start'>
                        <h1 className='card-title'>{product.name}</h1>
                            <p className='card-text'>Description Short: {product.descriptionShort}</p>
                            <h3 className='card-text'>Price: ${product.price}</h3>

                            <div className='card-text mb-3'>
                                <form>
                                    <div className="card-text row">
                                        <p className='lead'>Sizes:</p>
                                         {product.sizes.map(size => {
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
                                    <button type='button' className='btn btn-secondary' onClick={() => addToCart(product)}>Add to Cart</button>
                                </form>
                            </div>

                            <p className='card-text'>
                                Colors: {product.colors.map(color => (
                                    color.colorName
                                ))}
                            </p>
                            
                        </div>
                    </div>
                </div>
                <div className="col px-0">
                    { images }
                </div>
            </div>
            <div className="row text-start bg-primary-subtle p-5 mb-5">
                <h4>Additional Details:</h4>
                <div className="col">
                    <p className='card-text'>{product.descriptionLong}</p>
                </div>
                <div className="col">
                    {product.additionalDetails.map(prompt => (
                        <ul className='list-group mb-3' key={prompt._id}>
                            <li className='list-group-item'>materials: {prompt.materials}</li>
                            <li className='list-group-item'>Recommended: {prompt.recommendedFor}</li>
                            <li className='list-group-item'>Made In: {prompt.madeIn}</li>
                            <li className='list-group-item'>Care: {prompt.care}</li>
                            <li className='list-group-item'>Shipping: {prompt.shipping}</li>
                        </ul>
                    ))}
                </div>
                <div className="col">
                    <p className='card-text'>Type: {product.type}</p>
                    <p className='card-text'>Materials: {product.materials.map(material => (
                    material.material1
                    ))}</p>
                    <p className='card-text'>Promotion: {product.promotion}%</p>
                    <p className='card-text'>Stock: {product.stock} units</p>
                </div>
            </div>
        </>
        
    )

    return (
        <>
            { productsItem }
        </>
    )
}