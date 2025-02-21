import { Link } from "react-router-dom"
import './index.css';

export default function Footer() {
    return (
        <div className="col bg-secondary-subtle pt-3">
            <div className="row my-5">
                <div className="col">
                    <div className="row">
                        <h2>Shipping</h2>
                    </div>
                    <div className="row">
                        <h5>45 Day Returns</h5>
                        <p>Use our online portal to process your return within 45 days of purchase.</p>
                        <h5>Free Worldwide Delivery</h5>
                        <p>Free worldwide delivery on orders over $95 USD.</p>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                        <h2>Site</h2>
                    </div>
                    <Link to="/">
                        <h5 className="text-secondary">Shose</h5>
                    </Link>
                    <Link to="/products/all-products">
                        <h5 className="text-secondary">Products</h5>
                    </Link>
                    <Link to="/brand">
                        <h5 className="text-secondary">About</h5>
                    </Link>
                </div>
                <div className="col">
                    <div className="row">
                        <h2>Socials</h2>
                    </div>
                    <div className="row">
                        <h5>
                            <a href="/" className="text-secondary">Instagram</a>
                        </h5>
                    </div>
                    <div className="row">
                        <h5>
                            <a href="/" className="text-secondary">Blue Sky</a>
                        </h5>
                    </div>
                    <div className="row">
                        <h5>
                            <a href="/" className="text-secondary">Social Link 3</a>
                        </h5>
                    </div>
                </div>
            </div>
            <div className="row">
                <p>CopyRight: &copy; 2025 Marcus Jeong Canada. All Rights Reserved.</p>
            </div>
        </div>
    )
}