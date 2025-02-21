import { Link } from "react-router-dom"

export default function Dashboard() {
    return (
        <>
            <div className="row">
                <h1>Admin</h1>
                <p>Welcome Admin! Listed below are a few actions you can access.</p>
            </div>
            <div className="row mb-5">
                <div className="col-4 align-self-center">
                    <h3>Product</h3>
                    <div className="row my-3">
                        <Link to="/admin/list-products">
                            <button className="btn btn-secondary" type="button">Products List</button>
                        </Link>
                    </div>
                </div>
                <div className="col-4 align-self-center">
                    <h3>Order</h3>
                    <div className="row my-3">
                        <Link to="/admin/users-list">
                            <button className="btn btn-secondary" type="button">View Users</button>
                        </Link>
                    </div>
                    <div className="row my-3">
                        <Link to="/admin/orders-list">
                            <button className="btn btn-secondary" type="button">View Orders</button>
                        </Link>
                    </div>
                </div>
                <div className="col-4 align-self-center">
                    <h3>Blog</h3>
                    <div className="row my-3">
                        <Link to="/admin/blogs-list">
                            <button className="btn btn-secondary" type="button">View Blogs</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
        
    )
}