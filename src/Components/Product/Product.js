import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'
const Product = ({ handleAddToCart, product }) => {
    // const { handleAddToCart, product } = props;
    const { img, name, price, seller, ratings } = product;
    // console.log(props);

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: {price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Ratings: {ratings}starts</small></p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'><p className='btn-text'>Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart} />  </button>

        </div>
    );
};

export default Product;