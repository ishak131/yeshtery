import React, { Component } from 'react';
import { getOneProduct } from '../services/single-product-info';
import Similarproducts from './SimilarProducts';

import './single-product.scss'

class SingleProduct extends Component {
    constructor() {
        super()
        this.state = {
            singleProduct: {},
            currentDisplayedImageIndex: 0,
            isLoading: true,
            selectedSizeIndex: 0,
            selectedColorIndex: 0,
            quantity: 1,
        }
    }

    componentDidMount() {
        this.setState({ singleProduct: getOneProduct(), isLoading: false })
    }


    componentDidUpdate() {
        this.handleAutoScrollWhenOutOfViewImageIsSelected()
    }

    handleNextImageSelection = () => {
        const nextIndex = this.handleOutOfRangeIndex(1)
        this.setState({ currentDisplayedImageIndex: nextIndex })
    }

    handlePreviousImageSelection = () => {
        const previousIndex = this.handleOutOfRangeIndex(-1)
        this.setState({ currentDisplayedImageIndex: previousIndex })
    }

    handleOutOfRangeIndex = (step) => {
        const { currentDisplayedImageIndex, singleProduct } = this.state
        if (singleProduct.thumbnails[(currentDisplayedImageIndex + step)]) {
            return (currentDisplayedImageIndex + step)
        } else {
            return currentDisplayedImageIndex
        }
    }

    handleAutoScrollWhenOutOfViewImageIsSelected = () => {
        if (this.state.currentDisplayedImageIndex + 1 > 4) {
            document.getElementById('selectors-wrapper').scrollLeft = (127 * this.state.currentDisplayedImageIndex)
        } else {
            document.getElementById('selectors-wrapper').scrollLeft = 0
        }
    }

    handleSelectImage = (selectedIndex) => {
        this.setState({ currentDisplayedImageIndex: selectedIndex })
    }

    handleRateStarsIllustration = (rate) => {
        const filledStar = process.env.PUBLIC_URL + "/images/single-product/filled-rating-star.png"
        const emptyStar = process.env.PUBLIC_URL + "/images/single-product/rating-star.png"
        const filledStarsArray = Array((parseInt(rate))).fill(filledStar)
        const emptyStarsArray = Array((5 - parseInt(rate))).fill(emptyStar)
        let stars = [...filledStarsArray, ...emptyStarsArray]
        return stars
    }

    handleChangeProductQuantity = (newQuantity) => {
        let maxQuantity = this.state.singleProduct.availableQuantity
        if (newQuantity < 1) {
            this.setState({ quantity: 1 })
        } else if (newQuantity > maxQuantity) {
            this.setState({ quantity: maxQuantity })
        } else {
            this.setState({ quantity: newQuantity })
        }
    }

    render() {
        const { singleProduct, isLoading, currentDisplayedImageIndex, selectedSizeIndex, selectedColorIndex, quantity } = this.state,
            { thumbnails, availableSizes, productBrandImage, productBrand, availableColors, productDescription, ratesNumber, genderCategory, price, oldPrice, offer, rate = 0 } = singleProduct

        return isLoading ? <>Loading...</> : (
            <main className='single-product'>
                <div className='product-controls-and-info content'>
                    <section className='images-slider'>
                        <div style={{ background: `url('${thumbnails[currentDisplayedImageIndex]}') center no-repeat` }} className='displayed-image-viewer' id='displayed-image-viewer'>
                            <button className='view_360'>
                                <img alt='360 view' src={process.env.PUBLIC_URL + "/images/single-product/view_360.svg"} />
                            </button>
                        </div>
                        <div className='view-image-controler'>
                            <button className='pagination-buttons' onClick={this.handlePreviousImageSelection}><img alt='previous' src={process.env.PUBLIC_URL + "/images/single-product/left-arrow.svg"} /></button>
                            <div className='selectors-wrapper' id='selectors-wrapper'>
                                {[...thumbnails].map(
                                    (image, index) =>
                                        <div key={index}>
                                            <button
                                                onClick={() => this.handleSelectImage(index)}
                                                className={(currentDisplayedImageIndex === index ? 'selected-image ' : "") + ' image-selector'}
                                                style={{ background: `url('${image}') center center` }}
                                            >
                                            </button>
                                        </div>
                                )}
                            </div>
                            <button className='pagination-buttons' onClick={this.handleNextImageSelection}><img alt='next' src={process.env.PUBLIC_URL + "/images/single-product/right-arrow.svg"} /></button>
                        </div>
                    </section>
                    <section className='info-and-control'>
                        <section className='product-info'>
                            <img src={productBrandImage} alt={productBrand} />
                            <p className='product-description'>{productDescription}</p>
                            <small>{genderCategory}</small>
                            <div className='rate-information'>
                                <span>
                                    {this.handleRateStarsIllustration(rate).map((star, index) => <img key={index + 'star'} alt='star' src={star} />)}
                                </span>
                                <p className='rate'>{rate} of 5</p>
                                <p className='rates-number'>{ratesNumber} of 5</p>
                            </div>
                            <div className='price-and-discount'>
                                <p className='price'>{price} <small> LE</small></p>
                                <p className='old-price'>{oldPrice} LE</p>
                                <p className='offer'>{offer} off</p>
                            </div>
                            <hr />
                        </section>
                        <section className='product-control'>
                            <div className='size'>
                                <h2>
                                    Size
                                </h2>
                                <span>
                                    {availableSizes.map((size, index) =>
                                        <button key={index} onClick={() => this.setState({ selectedSizeIndex: index })} className={(selectedSizeIndex === index ? "selected-size" : "") + ' product-size'}>{size}</button>
                                    )}
                                </span>
                            </div>
                            <hr />
                            <div className='color'>
                                <h2>
                                    Color
                                </h2>
                                <span>
                                    {availableColors.map((color, index) =>
                                        <button onClick={() => this.setState({ selectedColorIndex: index })} key={index} style={{ backgroundImage: `url("${color}")` }} className={(selectedColorIndex === index ? "selected-color" : "") + ' product-color'}></button>
                                    )}
                                </span>
                            </div>
                            <hr />
                            <div className='quantity'>
                                <h2>Quantity</h2>
                                <div className='quantity-controler'>
                                    <button onClick={() => this.handleChangeProductQuantity(quantity - 1)}>
                                        <img alt='minus' src={process.env.PUBLIC_URL + '/images/single-product/minus.png'} />
                                    </button>
                                    <input type='number' onChange={(e) => this.handleChangeProductQuantity(e.target.value)} value={quantity} />
                                    <button onClick={() => this.handleChangeProductQuantity(quantity + 1)}>
                                        <img alt='plus' src={process.env.PUBLIC_URL + '/images/single-product/plus.png'} />
                                    </button>
                                </div>
                            </div>
                            <div className='actions'>
                                <button id='add-to-cart-button'>Add To Cart</button>
                                <button>Pickup From Store</button>
                            </div>
                        </section>
                    </section>
                </div>
                {/* //////////////////////////////// */}
                <Similarproducts />
            </main>
        );
    }
}
export default SingleProduct;
