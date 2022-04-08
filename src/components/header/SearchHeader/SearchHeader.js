import React from 'react';
import adidas from '../../../images/adidasBrand.png'
import { Link } from 'react-router-dom';
import LinkWithIcon from '../LinkWithIcon';
import './search-header.scss'

const SearchInput = () => {
    return <div className='search'>
        <img alt='yeshtery search icon' src={process.env.PUBLIC_URL + '/images/header/search-icon.png'} />
        <input placeholder='Search' />
    </div>
}

const SearchHeader = ({ cartItemsCount }) => {
    const handleOpenCart = () => {
        document.getElementById('my-cart').style.left = 0
        document.getElementById('cart-content').style.right = 0
    }
    return (
        <div className='search-brand-header'>
            <div className='content'>
                <SearchInput />
                <img className='product_brand' alt='brand_name' src={adidas} />
                <div className='links-with-icon-wrapper'>
                    <button onClick={handleOpenCart} className='link-with-icon' to="#">
                        <img alt="shopping cart" src={process.env.PUBLIC_URL + '/images/header/my-cart.png'} />
                        <p className='badge'>{cartItemsCount}</p>
                        Cart
                    </button>
                    <LinkWithIcon linkPath="#" imageSource={process.env.PUBLIC_URL + '/images/header/heart.png'} text="Wishlist" />
                    <LinkWithIcon linkPath="#" imageSource={process.env.PUBLIC_URL + '/images/header/person.png'} text="Login" />
                </div>
            </div>
        </div>
    );
}

export default SearchHeader;
