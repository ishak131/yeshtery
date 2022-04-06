import React from 'react';
import { Link } from 'react-router-dom';

const LinkWithIcon = ({ linkPath, imageSource, text }) =>
    <Link className='link-with-icon' to={linkPath}>
        <img alt={text} src={imageSource} />
        {text}
    </Link>

const SingleOffer = ({ offerLink = "#", offerText = "Valentine’s Day Offers! Buy Two Get One Free " }) => <div className='single-offer'>
    <Link to={offerLink} target="_blank">
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
                        <SingleOffer />
                        <SingleOffer />
                        <SingleOffer />
                        <SingleOffer />
                        <SingleOffer />
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
