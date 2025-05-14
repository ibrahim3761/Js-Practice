import React from "react";
import { useLoaderData } from "react-router";

const UpdateUser = () => {
  const user = useLoaderData();
  const handleUpadetUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;

    const updateUser = { name, email };
    console.log(updateUser);
    // update user in the database
    fetch(`http://localhost:3000/users/${user._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
     
      body: JSON.stringify(updateUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data after creating user in db", data);
      });
  };
  return (
    <div>
      <form onSubmit={handleUpadetUser}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          defaultValue={user.name}
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Email"
          defaultValue={user.email}
        />
        <br />
        <input type="submit" value="Update User" />
      </form>
    </div>
  );
};

export default UpdateUser;
