import './index.css';
import { Link } from 'react-router-dom';
import Sandal from '../assets/sandal-category.jpg';
import Boot from '../assets/boot-category.jpg';
import Sneaker from '../assets/sneaker-category.jpg';

export default function Categories() {
    return(
        <>
            <div className="col">
                <Link to="/products/sandals" style={{textDecoration: "none"}}>
                    <div className="card categoryCard px-0 pt-0 h-100">
                        <img src={ Sandal } alt="Sandal category pic" className='card-img-top' style={{height: "50vh", objectFit: "cover"}} />
                        <div className="card-body">
                            <h5 className="card-title">
                                Sandals
                            </h5>
                            <p className="card-text">
                                Shop our stylish, breathable sandals—designed for comfort, durability, and perfect for warm weather adventures. Step into sustainable fashion today!
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="col">
                <Link to="/products/boots" style={{textDecoration: "none"}}>
                    <div className="card categoryCard px-0 pt-0 h-100">
                        <img src={ Boot } alt="Sandal category pic" className='card-img-top' style={{height: "50vh", objectFit: "cover"}} />
                        <div className="card-body">
                            <h5 className="card-title">
                                Boots
                            </h5>
                            <p className="card-text">
                                Explore our durable, eco-friendly boots—designed for comfort, style, and all-weather performance. Step confidently with sustainable footwear built to last!
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="col">
                <Link to="/products/sneakers" style={{textDecoration: "none"}}>
                    <div className="card categoryCard px-0 pt-0 h-100">
                        <img src={ Sneaker } alt="Sandal category pic" className='card-img-top' style={{height: "50vh", objectFit: "cover"}}  />
                        <div className="card-body">
                            <h5 className="card-title">
                                Sneakers
                            </h5>
                            <p className="card-text">
                                Discover our eco-friendly sneakers—lightweight, stylish, and built for all-day comfort. Sustainable fashion meets performance in every step!
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}