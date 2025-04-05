import React, { use, useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import { addIdToStoredCart, getStoredCart, removeFromCart } from "../../utilities/localstorage";
import Cart from "../Cart/cart";

const Bottles = ({ bottlesPromise }) => {

    const [cart,setCart] = useState([]);

    const bottles = use(bottlesPromise);
    // console.log(bottles);

    const storedCart = [];

    useEffect(() =>{
      const storedCardIDs = getStoredCart();
      // console.log(storedCardIDs , bottles);
      for (const id of storedCardIDs) {
        const cartBottle = bottles.find(bottle => bottle.id === id);
        if (cartBottle) {
          storedCart.push(cartBottle);
        }
      }

      setCart(storedCart);

    } ,[])

    const handleAddToCart = (bottle) => {
        const newCart = [...cart,bottle];
        setCart(newCart);

        // save bottle id to local storage
        addIdToStoredCart(bottle.id);
    }

    const handleRemoveFromCart = (id) => {
      // console.log('id removed', id);
      const remainingCart = cart.filter(bottle => bottle.id !== id);
      setCart(remainingCart);
      // remove id from local storage
      removeFromCart(id);
    }

    
  return (
    <div>
      <h3>Bottles: {bottles.length}</h3>
      <p>Added to cart: {cart.length}</p>
      <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
      <div className="bottles-container">
        {bottles.map((bottle) => (
          <Bottle key={bottle.id} handleAddToCart={handleAddToCart}  bottle={bottle}></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
