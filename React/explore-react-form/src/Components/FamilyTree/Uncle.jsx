import React from 'react';
import Cousin from './Cousin';

const Uncle = () => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className='flex'>
                <Cousin name={'Rafsan'}></Cousin>
                <Cousin name={'Nirma'}></Cousin>
            </section>
        </div>
    );
};

export default Uncle;