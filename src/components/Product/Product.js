import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { name, img, stock, seller, price, key } = props.product;
    // console.log(props);
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className='product-name'><Link to={"/product/" + key}>{name}</Link></h4>
                <p><small>{seller}</small></p>
                <p>${price}</p>
                <p><small>Only {stock} left in stock- Order soon</small></p>
                {
                    props.showAddToCart === true &&
                    <button
                        className='main-btn'
                        onClick={() => props.handleAddProduct(props.product)}
                    ><FontAwesomeIcon icon={faShoppingCart} />  add to cart</button>
                }
            </div>
        </div>
    );
};

export default Product;