import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AddBlog(props) {
    //useNaviagte
    const navigateTo = useNavigate()
    //new blog id
    const newBlogId = props.props[props.props.length-1].id + 1;

    let blogTemplateObj = {
        id: newBlogId,
        title: "",
        descriptionShort: "",
        text: ""
    }

    //states
    const [formData, setFormData] = useState(blogTemplateObj);

    //handle form changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name] : value});
    };

    const submitFunction = async (e) => {
        e.preventDefault();
        // console.log(formData);
        try {
            const response = await axios.post('http://localhost:8888/addBlog', formData);
            console.log('Form data submitted', response.data);
            navigateTo('/admin/blogs-list');
            navigateTo(0);
        } catch (err) {
            console.error("Error", err);
        };
    }

    return (
        <>
            <div className="row mt-5">
                <div className="col-2">
                    <button type="button" className="btn btn-secondary" onClick={() => navigateTo(-1)}>Back</button>
                </div>
            </div>
            <h1>Add Blog</h1>
            <form action="post" onSubmit={submitFunction}>
                <h3>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="title">Title:</label>
                        </div>
                        <div className="col">
                            <input type="text" name="title" placeholder="Blog Title" value={formData.title} onChange={handleChange}/>
                        </div>
                    </div>
                </h3>
                <h3>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="descriptionShort">Short Description:</label>
                        </div>
                        <div className="col">
                            <textarea id="descriptionShort" name="descriptionShort" placeholder="Short Description" value={formData.descriptionShort} onChange={handleChange}></textarea>
                        </div>
                    </div>
                </h3>
                <h3>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="text">Text:</label>
                        </div>
                        <div className="col">
                            <textarea id="text" name="text" placeholder="Text" value={formData.text} onChange={handleChange}></textarea>
                        </div>
                    </div>
                </h3>
                
                <button type="submit" className="btn btn-primary">Add Blog</button>
            </form>
        </>
    )
}