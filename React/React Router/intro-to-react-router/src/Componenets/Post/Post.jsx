import React from 'react';
import { Link, useNavigate } from 'react-router';

const Post = ({post}) => {
    const {title, id} = post;
    const postStyle = {
        border: '1px solid gray',
        borderRadius: '5px',
        padding: '10px',
        margin: '10px',
        backgroundColor: '#f9f9f9'
    }

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/posts/${id}`);
    }

    return (
        <div style={postStyle}>
            <h3>{title}</h3>
            <Link to={`/posts/${id}`}><button>Show Details</button></Link>
            <button onClick={handleNavigate}>Show Details: {id}</button>
        </div>
    );
};

export default Post;