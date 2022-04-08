import React from 'react';
import { Link } from 'react-router-dom';
import { getHeaderOffers } from '../../../services/offers'
import LinkWithIcon from '../LinkWithIcon';
import './yellow-header.scss'


const SingleOffer = ({ offerLink, offerText }) => <div className='single-offer'>
    <Link to={offerLink} >
        <p>{offerText}</p>
        {" "}
        <strong> Shop Now</strong>
    </Link>
</div>


const YellowHeader = () => {

    const scrollToLeftOffer = () => {
        document.getElementById("over").scrollLeft += 423
    }

    const scrollToRightOffer = () => {
        document.getElementById("over").scrollLeft -= 423
    }

    return (
        <div className='yellow-header'>
            <div className='content'>
                <div className='icons-wrapper'>
                    <img alt="sandwich" src={process.env.PUBLIC_URL + "/images/header/sandwich-icon.svg"} />
                    <img alt="yeshtrey" src={process.env.PUBLIC_URL + "/images/header/logo.svg"} />
                </div>
                <div className='offers-slider'>
                    <button onClick={scrollToRightOffer} className='transparent-button'>
                        <img alt='left arrow' src={process.env.PUBLIC_URL + "/images/header/left-arrow.png"} />
                    </button>
                    <div id='over' className='offers-wrapper'>
                        {getHeaderOffers().map((offer, index) => <SingleOffer key={index} {...offer} />)}
                    </div>
                    <button onClick={scrollToLeftOffer} className='transparent-button'>
                        <img alt='right arrow' src={process.env.PUBLIC_URL + "/images/header/right-arrow.png"} />
                    </button>
                </div>
                <div className='icons-wrapper'>
                    <LinkWithIcon linkPath="#" text="Contact Us" imageSource={process.env.PUBLIC_URL + "/images/header/phone.png"} />
                    <LinkWithIcon linkPath="#" text="Track Order" imageSource={process.env.PUBLIC_URL + "/images/header/shopping-car.png"} />
                    <LinkWithIcon linkPath="#" text="Find A Store" imageSource={process.env.PUBLIC_URL + "/images/header/location.png"} />
                </div>
            </div>
        </div>
    );
}

export default YellowHeader;
