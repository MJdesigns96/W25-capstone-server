import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function DeleteBlog(props) {
    //useNaviagte
    const navigateTo = useNavigate()
    // console.log(props.props);
    const { blogId } = useParams();
    let blogsList = props.props;
    let filtered;

    
    //filter to find the blog
    blogsList.map(entry => {
        if (entry.id === Number(blogId)) {
            filtered = entry;
        }
    });
    
    //set State
    const [blog, setBlog] = useState(filtered);

    const deleteBlog = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8888/deleteBlog', blog);
            console.log('Item has been deleted', response.data);
            navigateTo('/admin/blogs-list');
            navigateTo(0);
        } catch (err) {
            console.log("Error: ", err);
        }
    }

    return (
        <div className="row">
            <div className="col">
                <div className="row">
                    <div className="col-2 my-3">
                        <button type="button" className="btn btn-secondary" onClick={() => navigateTo(-1)}>Back</button>
                    </div>
                </div>
                <div className="row">
                    <h1>Are you sure?</h1>
                </div>
                <div className="row">
                    <div className="col">
                        <p>We just want to confirm that you want to delete:</p>
                        <h2>{blog.name}</h2>
                    </div>
                    <div className="row my-5">
                        <div className="col">
                            <button type="button" className="btn btn-danger" onClick={deleteBlog}>Delete</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}