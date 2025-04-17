import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PostDetails = () => {

    const post = useLoaderData();

    const navigate = useNavigate();
   
    console.log(post);
    const { title, body } = post;
    const postStyle = {
        border: '1px solid gray',
        borderRadius: '5px',
        padding: '10px',
        margin: '10px',
        backgroundColor: '#f9f9f9',
        width: '550px',
        textAlign: 'center',
    }
    return (
        <div style={postStyle}>
            <h2>{title}</h2>
            <p>{body}</p>
            <button onClick={()=>navigate(-1)}>Go back</button>
        </div>
    );
};

export default PostDetails;