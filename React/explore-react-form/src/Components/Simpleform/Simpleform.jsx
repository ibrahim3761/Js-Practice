import React from 'react';

const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.name.value);
    console.log(event.target.email.value);
}

const Simpleform = () => {
    return (

        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' placeholder='Your Name' />
                <br />
                <input type="email" name="email" placeholder='Your Email' id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Simpleform;