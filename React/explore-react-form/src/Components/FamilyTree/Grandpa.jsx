import React from 'react';
import Dad from './Dad';
import Uncle from './Uncle';
import Aunt from './Aunt';

const Grandpa = ({assets}) => {
    return (
        <div>
            <h2>Grandpa</h2>
            <section className='flex'>
                <Dad assets={assets}></Dad>
                <Uncle></Uncle>
                <Aunt assets={assets}></Aunt>
            </section>
        </div>
    );
};

export default Grandpa;