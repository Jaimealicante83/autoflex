import React from 'react';
import { Link } from 'react-router-dom';
import './Post.scss';

const Post = (props) => {
    return (
        <div className="post">
            <img src={props.image} alt={props.altDesc} />
            <h3>{props.title}</h3>
            <p>{props.content}</p>
            <Link to="/blog" style={{ textDecoration: "none", color: "inherit" }}><div className="vermas-wrapper">
                <a>Ver más</a>
                <img src="/arrow-right.png" alt="Flecha a la derecha" />
            </div> </Link>
        </div>
    );
};

export default Post;