import React from 'react';
import MySelf from './MySelf';
import Brother from './Brother';
import Sister from './Sister';

const Dad = ({assets}) => {
    return (
        <div>
            <h2>Dad</h2>
            <section className='flex'>
                <MySelf assets={assets}></MySelf>
                <Brother></Brother>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Dad;