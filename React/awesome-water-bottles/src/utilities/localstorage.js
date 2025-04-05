const getCartFromLocalStorage = () => {
    const storedCartString = localStorage.getItem('cart');
    if (storedCartString) {
        const storedCart = JSON.parse(storedCartString);
        return storedCart;
    }
    return[];
}

const saveCartToLocalStorage = (cart) => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

const removeFromLocalStorage = (id) => {
    const storedCart= getCartFromLocalStorage();
    const remainingCart = storedCart.filter(storedID=> storedID !== id);
    saveCartToLocalStorage(remainingCart);
  }

const addItemToLocalStorage = (id) =>{
    const cart = getCartFromLocalStorage();
    const newCart = [...cart, id];
    saveCartToLocalStorage(newCart);
}   

export { getCartFromLocalStorage as getStoredCart, addItemToLocalStorage as addIdToStoredCart, removeFromLocalStorage as removeFromCart};