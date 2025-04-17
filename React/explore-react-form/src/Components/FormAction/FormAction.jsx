import React from "react";

const handleSubmit = (formData) =>{
    console.log(formData.get('name'));
    console.log(formData.get('email'));
}

const FormAction = () => {
  return (
    <div>
      <form action={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" />
        <br />
        <input type="email" name="email" placeholder="Your Email" id="" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default FormAction;
