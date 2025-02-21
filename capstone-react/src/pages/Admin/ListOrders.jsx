import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ListOrders (props) {
    const [orders, setOrders] = useState();
    useEffect(() => {
        setOrders(props.props);
    }, [props]);

    const ordersList = orders?.map(entry => (
        <tr key={entry.id}>
            <th scope="row">{entry.id}</th>
            <td>{ entry.userId ? entry.userId : "Na" }</td>
            <td>${ entry.total.toFixed(2) }</td>
            <td>{ entry.paid ? "Yes" : "No" }</td>
            <td>{ entry.shipped ? "Yes" : "No" }</td>
            <td>{ entry.completed ? "Yes" : "No" }</td>
            <td>{ entry.email ? entry.email : "Na" }</td>
            <td>{ entry.firstName ? entry.firstName : "Na" }</td>
            <td>{ entry.lastName ? entry.lastName : "Na" }</td>
            <td>{ entry.address ? entry.address : "Na" }</td>
            <td>{ entry.city ? entry.city : "Na" }</td>
            <td>{ entry.postal ? entry.postal : "Na" }</td>
            <td>{ entry.province ? entry.province : "Na" }</td>
            <td>{ entry.shipping ? entry.shipping : "Na" }</td>
            <td>{ entry.paymentMethod ? entry.paymentMethod : "Na" }</td>
        </tr>
    ))

    return (
        <div className="row">
            <div className="col">
                <div className="row mt-5 mx-5 text-start">
                    <div className="col-2">
                        <Link to={`/admin/dashboard`}>
                            <button type="button" className="btn btn-secondary">Back</button>
                        </Link>
                    </div>
                </div>
                <div className="row">
                <h2>Orders List</h2> 
                </div>
                <div className="row">
                    <table className="table w-auto">
                        <thead>
                            <tr>
                                <th scope="orderId">Order ID</th>
                                <th scope="userId">User ID</th>
                                <th scope="total">Total</th>
                                <th scope="paid">Paid</th>
                                <th scope="shipped">Shipped</th>
                                <th scope="completed">Completed</th>
                                <th scope="email">Email</th>
                                <th scope="firstName">First Name</th>
                                <th scope="lastName">Last Name</th>
                                <th scope="address">Address</th>
                                <th scope="city">City</th>
                                <th scope="postal">Postal</th>
                                <th scope="province">Province</th>
                                <th scope="shipping">Shipping</th>
                                <th scope="paymentMethod">Payment Method</th>
                            </tr>
                        </thead>
                        <tbody className="overflow-x-scroll">
                            {ordersList}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}