import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ListBlogs (props) {
    //state
    const [blogs, setBlogs] = useState();
    //set state from props
    useEffect(() => {
        setBlogs(props.props);
    }, [props]);
    // console.log(blogs);

    //nav button to go back
    const navigate = useNavigate();

    //set data into table
    const blogsList = blogs?.map(entry => (
        <tr key={entry.id}>
            <th scope="row">{entry.id}</th>
            <td>{entry.title}</td>
            <td>{entry.descriptionShort}</td>
            <td>
                <Link to={`/admin/update-blog/${entry.id}`}>
                    <button type="button" className="btn btn-info">Edit</button>
                </Link>
            </td>
            <td>
                <Link to={`/admin/delete-blog/${entry.id}`}>
                    <button type="button" className="btn btn-danger">Delete</button>
                </Link>
            </td>
        </tr>
    ))

    return(
        <>
            <div className="row mt-5 mx-5 text-start">
                <div className="col-2">
                    <Link to={`/admin/add-blog`}>
                        <button type="button" className="btn btn-primary">Add Blog</button>
                    </Link>
                </div>
                <div className="col-2">
                    <Link to={`/admin/dashboard`}>
                        <button type="button" className="btn btn-secondary">Back</button>
                    </Link>
                </div>
            </div>
            <div className="row mb-3">
                <h1>Blogs List</h1>
            </div>
            <div className="row">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Title</th>            
                            <th scope="col">Short Description</th>              
                            <th scope="col">Edit</th>              
                            <th scope="col">Delete</th>              
                        </tr>
                    </thead>
                    <tbody>
                        {blogsList}
                    </tbody>
                </table>
            </div>            
        </>
    )
}