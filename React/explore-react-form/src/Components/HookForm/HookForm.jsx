import React from 'react';
import useInputField from '../../hooks/useinputfield';

const HookForm = () => {

    const [name,nameOnChange] =useInputField('');
    const [email,emailOnChange] =useInputField('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name,email);
        console.log(e.target.name.value);
        console.log(e.target.email.value);
    }



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={nameOnChange} defaultValue={name} name='name' placeholder='Name' />
                <br />
                <input type="email" name="email" onChange={emailOnChange} defaultValue={email} placeholder='Your Email'  />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default HookForm;