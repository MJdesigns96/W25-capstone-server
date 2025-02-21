import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function UpdateBlog (props) {
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBlog({ ...blog, [name] : value});
    };

    const submitFunction = async (e) => {
        e.preventDefault();
        // console.log(blog);

        try {
            const response = await axios.post('http://localhost:8888/updateBlog', blog);
            console.log('Form data submitted', response.data);
            navigateTo('/admin/blogs-list');
            navigateTo(0);
        } catch (err) {
            console.error("Error", err);
        };
    }
    
    return(
        <>
            <div className="row">
                <div className="col">
                    <div className="row mt-5">
                        <div className="col-2">
                            <button type="button" className="btn btn-secondary" onClick={() => navigateTo(-1)}>Back</button>
                        </div>
                    </div>
                    <div className="row">
                        <h1>Update Blog</h1>
                    </div>
                    <div className="row">
                        <form action="post" onSubmit={submitFunction}>
                            <input type="hidden" id="id" name="id" value={blog.id} />
                            <h3>
                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="title">Title: </label>
                                    </div>
                                    <div className="col">
                                        <input type="text" id="title" name="title" value={blog.title} onChange={handleChange} />
                                    </div>
                                </div>
                            </h3>
                            <h3>
                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="descriptionShort">Short Description:</label>
                                    </div>
                                    <div className="col">
                                        <textarea id="descriptionShort" name="descriptionShort" placeholder="Short Description" value={blog.descriptionShort} onChange={handleChange}></textarea>
                                    </div>
                                </div>
                            </h3>
                            <h3>
                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="text">Text:</label>
                                    </div>
                                    <div className="col">
                                        <textarea id="text" name="text" placeholder="Text" value={blog.text} onChange={handleChange}></textarea>
                                    </div>
                                </div>
                            </h3>
                            
                            <button type="submit" className="btn btn-primary">Update</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}