import React from 'react';
import './my-cart.scss'


const ProductCard = ({ productImage, caption, quantity, price, handleRemoveProductFromCart }) => {
    return (
        <div className='my-cart-product-card'>
            <div className='product-image' style={{ background: `url("${productImage}")  center no-repeat` }} />
            <div className='info'>
                <p className='caption'>
                    {caption}
                </p>
                <small className='quantity' > Quantity: {quantity}</small>
                <div className='price-and-remove_button'>
                    <p className='price'>{price} <small>LE</small></p>
                    <button onClick={handleRemoveProductFromCart}>Remove</button>
                </div>
            </div>
        </div>
    )
}


const MyCart = ({ handleRemoveProductFromCart, cartItems, total }) => {
    const handleCloseCart = () => {
        document.getElementById('my-cart').style.left = '100vw'
        document.getElementById('cart-content').style.right = '-500px'
    }
    return (
        <div id='my-cart' className='my-cart'>
            <div id='cart-content'>
                <button onClick={handleCloseCart} className='close'><img alt='close' src={process.env.PUBLIC_URL + "/images/close.png"} /></button>
                <h1>My Cart</h1>
                <p>Cart Summary</p>
                {cartItems.map((item, index) => <ProductCard {...item} handleRemoveProductFromCart={() => handleRemoveProductFromCart(index)} />)}
                <h2>Total : {total} LE</h2>
                <div className='actions'>
                    <button>Review Cart</button>
                    <button>Complete Checkout</button>
                </div>
            </div>
        </div>
    );
}

export default MyCart;
