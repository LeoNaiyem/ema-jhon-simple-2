import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    // const total = cart.reduce((total, prd) => total + prd.price, 0);
    const total = 0;
    for (const i = 0; i > cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    }

    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Order :   {cart.length}</p>
            <p>Total Price :   {total}</p>
            <p><small>Shipping : </small></p>
        </div>
    );
};

export default Cart;