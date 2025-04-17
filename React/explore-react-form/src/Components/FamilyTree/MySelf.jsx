import React from 'react';
import Special from './Special';

const MySelf = ({assets}) => {
    return (
        <div>
            <h3>Myself</h3>
            <section>
                <Special assets={assets}></Special>
            </section>
        </div>
    );
};

export default MySelf;