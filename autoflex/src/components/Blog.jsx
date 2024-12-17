import React from 'react';
import './Blog.scss';
import Nav from './Nav';

const Blog = () => {
    return (
        <div className="blog">
            <Nav />
            <h1>Blog Component</h1>
            <p>Welcome to the blog!</p>
        </div>
    );
};

export default Blog;