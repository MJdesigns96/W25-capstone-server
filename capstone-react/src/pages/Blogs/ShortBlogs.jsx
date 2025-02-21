//import state from server
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function ShortBlogs(props) {
    let blogs = props.props;

    const blogCard = blogs.map(blog => (
        <div className='card' key={blog.id}>
            <div className="card-body">
                <h5 className="card-title">
                    {blog.title}
                </h5>
                <p className="card-text">
                    {blog.descriptionShort}
                </p>
                <br></br>
                <Link to={`/blogs/${blog.id}`}>See More</Link>
            </div>
        </div>
    ))

    return (
        <div className="row">
            <div className='col'>
                {blogCard}
            </div>
        </div>
    )
}