import React, { use } from 'react';

const Users2 = ({usersPromise}) => {
    const users = use(usersPromise);    
    console.log("Users 2 data load",users);
    return (
        <div>
            <h2>This is Users2</h2>
        </div>
    );
};

export default Users2;