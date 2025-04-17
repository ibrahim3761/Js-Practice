import React, { useState } from 'react';

const ProductForm = ({handleAddProduct}) => {
    const [error,setError]= useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
         
        // console.log(name, price, quantity);

        if(name.length === 0){
            setError('Please provide product name');
        }
        else if(price.length === 0){
            setError('Please provide product price');
        }
        else if(price < 0){
            setError('Please provide valid price');
        }
        else{
            setError('');
        }

        const newProduct ={
            name,
            price,
            quantity,
        }

        console.log(newProduct);

        if(error.length === 0){
            handleAddProduct(newProduct);
            event.target.reset();
        }
        
    }



    return (
        <div>
            <h1>Product Form</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' placeholder='Product Name' />
                <br />
                <input type="text" name='price' placeholder='Product Price' />
                <br />
                <input type="text" name='quantity' placeholder='Product Quantity' />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <p><small>{error}</small></p>
        </div>
    );
};

export default ProductForm;