//import React from "react";

import { use, useState } from "react";
import { Link } from "react-router";

const Users = ({ userPromise }) => {
  const loadedUser = use(userPromise);
  const [users, setUsers] = useState(loadedUser);

  const handleAddUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const newUser = { name, email };
    console.log(newUser);

    // create user in the database
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data after creating user in db", data);
        if (data.insertedId) {
            newUser._id = data.insertedId;
            const newUsers = [...users,newUser];
            setUsers(newUsers)
          alert("users added successfully");
          e.target.reset();
        }
      });
  };

  const handleUserDelet =(id)=>{
    console.log("delte this user",id);
    fetch(`http://localhost:3000/users/${id}`,{
        method: "DELETE",
    } )
    .then(res=>res.json())
    .then(data=>{
        if(data.deletedCount){
            const remainingUsers = users.filter(user=>user._id!==id)
            setUsers(remainingUsers) 
            console.log(data);
        }
        
        
    })
  }

  return (
    <div>
        <h1>Users: {users.length}</h1>
      <div>
        {/* add users */}
        <form onSubmit={handleAddUser}>
          <input type="text" name="name" placeholder="Name" />
          <br />
          <input type="email" name="email" placeholder="Email" />
          <br />
          <input type="submit" value="Add Users" />
        </form>
      </div>
      <div>
        {/* view users */}
        {
            users.map(user => <p key={user._id}>{user.name}: {user.email} <Link to={`/update/${user._id}`}>Edit</Link> <Link to={`/users/${user._id}`}>Details</Link> <button onClick={()=>handleUserDelet(user._id)}>X</button></p>)
        }
      </div>
    </div>
  );
};

export default Users;
