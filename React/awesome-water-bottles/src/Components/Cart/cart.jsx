import React from 'react';
import './Cart.css';

const cart = ({cart,handleRemoveFromCart}) => {
    return (
        <div className='cart-container'>
            {
                cart.map(bottle =><div key={bottle.id}>
                    <img src={bottle.img} alt="" />
                    <button onClick={()=>handleRemoveFromCart(bottle.id)} >x</button>
                </div>)
            }
        </div>
    );
};

export default cart;