import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ListUsers(props) {
    //state
    const [users, setUsers] = useState();
    useEffect(() => {
        setUsers(props.props);
    }, [props]);

    const usersList = users?.map(user => (
        <tr key={user.id}>
            <th scope="row">{user.id}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.password}</td>
        </tr>
    ))

    return(
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
                   <h2>Users List</h2> 
                </div>
                <div className="row">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="id">User ID</th>
                                <th scope="name">Name</th>
                                <th scope="email">Email</th>
                                <th scope="password">Password</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usersList}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}