import React, { useRef } from 'react';

const UncontrolledField = () => {

    const emailref = useRef('');
    const passwordref = useRef('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(emailref.current.value);
        const email = emailref.current.value;
        const password = passwordref.current.value;
        console.log(email,password);
        
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={emailref} type="email" name="email" placeholder='Email' />
                <br />
                <input ref={passwordref} type="password" name="password" placeholder='password' />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default UncontrolledField;