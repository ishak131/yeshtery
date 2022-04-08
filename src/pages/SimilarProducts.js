import React from 'react';
import { getSimilarProducts } from '../services/similar-products';


import './similar-product.scss'


const ProductCard = ({ thumbnail, caption, brandImage, price, oldPrice, offer, rate, pickedFrom, pickedTo, duration }) => {
    const filledStar = process.env.PUBLIC_URL + "/images/single-product/filled-rating-star.png"
    const emptyStar = process.env.PUBLIC_URL + "/images/single-product/rating-star.png"

    return <div className='product-card'>
        <div className='product-thumbnail' style={{ background: `url("${thumbnail}") center no-repeat` }}>
            <button>
                <img alt='360 view' src={process.env.PUBLIC_URL + '/images/single-product/view_360.svg'} />
            </button>
        </div>
        <div className='product-info'>
            <p className='product-caption'>{caption}</p>
            <div className='price-and-discount'>
                <div>
                    <div className='price'>{price} <small>LE</small></div>
                    <div className='discount'>
                        <span className='old-price'>{oldPrice} LE</span>
                        <span className='offer'> {offer} </span> </div>
                </div>
                <img alt='product-brand' src={brandImage} />
            </div>
            <div className='rate'>
                <span className='product-rate-in-stars'>
                    {[...Array(parseInt(rate)).fill(filledStar), ...Array(5 - parseInt(rate)).fill(emptyStar)].map((star, index) => <img key={index + 'star'} alt='star' src={star} />)}
                </span>
                <span className='rate-out-of-five'>{rate} of 5</span>
            </div>
            <div className='place-time-info'>
                {
                    !duration ?
                        <span>Pickup From:<strong> {pickedFrom}</strong></span>
                        :
                        <div>
                            <span>From: <strong>{pickedFrom}</strong></span>
                            <span>To: <strong>{pickedTo}</strong></span>
                            <span>in: <strong>{duration} {duration > 1 ? "Days" : ""}</strong></span>
                        </div>
                }
            </div>
        </div>
    </div>
}


const Similarproducts = () => {
    return (
        <section className='similar-products content' >
            <h1>Similar Products</h1>
            <p>You may like these products also</p>
            <div>
                {getSimilarProducts().map((product) => <ProductCard {...product} />)}
            </div>
        </section>
    );
}

export default Similarproducts;
