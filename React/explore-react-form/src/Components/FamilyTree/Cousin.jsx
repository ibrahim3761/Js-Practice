import React from 'react';
import Special from './Special';
import Friend from './Friend';

const Cousin = ({name,assets}) => {
    return (
        <div>
            <h3>{name}</h3>
            {
                name === 'Togo' && <Special assets={assets}></Special>
            }
            {
                name === 'Toma' && <Friend></Friend>
             }
        </div>
    );
};

export default Cousin;