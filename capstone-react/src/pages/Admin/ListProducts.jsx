import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ListProducts(props) {
    //state
    const [products, setProducts] = useState();
    //set state from props
    useEffect(() => {
        setProducts(props.props);
    }, [props]);
    // console.log(products);

    //nav button to go back
    const navigate = useNavigate();

    //set data into table
    const productsList = products?.map(entry => (
        <tr key={entry.id}>
            <th scope="row">{entry.id}</th>
            <td>{entry.name}</td>
            <td>{entry.type}</td>
            <td>${entry.price}</td>
            <td>{entry.stock} units</td>
            <td>{entry.promotion}%</td>
            <td>
                <Link to={`/admin/update-product/${entry.id}`}>
                    <button type="button" className="btn btn-info">Edit</button>
                </Link>
            </td>
            <td>
                <Link to={`/admin/delete-product/${entry.id}`}>
                    <button type="button" className="btn btn-danger">Delete</button>
                </Link>
            </td>
        </tr>
    ))

    return(
        <>
            <div className="row mt-5 mx-5 text-start">
                <div className="col-2">
                    <Link to={`/admin/add-product`}>
                        <button type="button" className="btn btn-primary">Add Product</button>
                    </Link>
                </div>
                <div className="col-2">
                    <Link to={`/admin/dashboard`}>
                        <button type="button" className="btn btn-secondary">Back</button>
                    </Link>
                </div>
            </div>
            <div className="row mb-3">
                <h1>Products List</h1>
            </div>
            <div className="row">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Type</th>
                            <th scope="col">Price</th>
                            <th scope="col">Stock</th>
                            <th scope="col">Promotion</th>                           
                            <th scope="col">Edit</th>                           
                            <th scope="col">Delete</th>                           
                        </tr>
                    </thead>
                    <tbody>
                        {productsList}
                    </tbody>
                </table>
            </div>            
        </>
    )
}