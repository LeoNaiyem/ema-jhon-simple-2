import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const { name, img, stock, seller, price } = props.product;
    // console.log(props)
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className='product-name'>{name}</h4>
                <p><small>{seller}</small></p>
                <p>${price}</p>
                <p><small>Only {stock} left in stock- Order soon</small></p>
                <button
                    className='main-btn'
                    onClick={() => props.handleAddProduct(props.product)}
                ><FontAwesomeIcon icon={faShoppingCart} />  add to cart</button>
            </div>
        </div>
    );
};

export default Product;