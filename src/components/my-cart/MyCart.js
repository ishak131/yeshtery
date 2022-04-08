import React from 'react';
import './my-cart.scss'


const ProductCard = () => {
    <div className='my-cart-product-card'>
        <img />
        <div className='info'>
            <p className='caption'></p>
            <div>
                <p></p>
                <div>
                    <p></p>
                    <button></button>
                </div>
            </div>
        </div>
    </div>
}


const MyCart = () => {
    return (
        <div className='my-cart'>
            <div >
                <button className='close'><img alt='close' src={process.env.PUBLIC_URL + "/images/close.png"} /></button>
                <h1>My Cart</h1>
                <p>Cart Summary</p>
            </div>
        </div>
    );
}

export default MyCart;
