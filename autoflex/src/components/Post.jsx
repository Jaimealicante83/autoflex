import React from 'react';
import './Post.scss';

const Post = (props) => {
    return (
        <div className="post">
            <img src={props.image} alt={props.altDesc} />
            <h3>{props.title}</h3>
            <p>{props.content}</p>
            <div className="vermas-wrapper">
                <a>Ver más</a>
                <img src="/arrow-right.png" alt="Flecha a la derecha" />
            </div>
        </div>
    );
};

export default Post;