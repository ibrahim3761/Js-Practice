import React, { useState } from 'react';

const ControlledField = () => {

    const [password,setPassword] = useState('');
    const [error,setError] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(password.length < 6){
            setError('Password must be at least 6 characters long');
        }
        else{
            setError('');
        }
    }

    const handleOnChange = (e) =>{
        setPassword(e.target.value);
        console.log(e.target.value);

        if(password.length < 6){
            setError('Password must be at least 6 characters long');
        }
        else{
            setError('');
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" id="" placeholder='Email' required/>
                <br />
                <input type="password" name="password" onChange={handleOnChange} defaultValue={password} id="" placeholder='password' required />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <p>
                <small>{error}</small>
            </p>
        </div>
    );
};

export default ControlledField;