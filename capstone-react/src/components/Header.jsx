import { Link } from "react-router-dom"
import Profile from "../assets/user-solid.svg"
import Cart from "../assets/cart.svg"

export default function Header() {
    //check the loggedIn status from local storage for profile redirect
    let logStatus = localStorage.getItem('loggedIn');
    let booleanValue = logStatus === "true";

    let accountRedirect;
    if (!booleanValue) {
        accountRedirect = "/accounts/login"
    } else {
        accountRedirect = "/accounts/details"
    }

    return (
        <nav className="navbar navbar-expand-lg bg-primary row sticky-top">
            <div className="container-fluid">
                <Link className="nav-link text-light me-3" to="/">
                    <h2>Shose</h2>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/products/all-products">Products</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a  className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">About</a>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link className="nav-link" to="/brand">Brand</Link>
                                </li>
                                <li>
                                    <Link className="nav-link" to="/blogs/short-blogs">Blog</Link>
                                </li>
                            </ul>
                        </li>

                    </ul>
                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-info" type="submit">Search</button>
                    </form> */}
                    <div className="mx-3">
                        <Link to={accountRedirect}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ffff" class="bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                            </svg>
                        </Link>
                    </div>
                    <div className="mx-3">
                        <Link to='/checkout/cart'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ffff" class="bi bi-cart" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}