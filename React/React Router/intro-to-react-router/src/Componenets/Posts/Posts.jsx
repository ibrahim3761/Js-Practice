import React from 'react';
import { useLoaderData } from 'react-router';
import Post from '../Post/Post';

const Posts = () => {

    const posts = useLoaderData();
    console.log(posts);
    
    return (
        <div>
            <h2>This are my posts: {posts.length}</h2>
            {
                posts.map(post => <Post post={post}></Post>)
            }
        </div>
    );
};

export default Posts;