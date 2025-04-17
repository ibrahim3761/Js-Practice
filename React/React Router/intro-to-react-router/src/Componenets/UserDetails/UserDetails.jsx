import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const UserDetails = () => {

    const user = useLoaderData();

    const params = useParams();
    console.log(user);
    const { name, email, phone, website } = user;

    const userStyle = {
        border: '1px solid gray',
        borderRadius: '5px',
        padding: '10px',
        margin: '10px',
        backgroundColor: '#f9f9f9'
    }

    return (
        <div style={userStyle}>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>

        </div>
    );
};

export default UserDetails;