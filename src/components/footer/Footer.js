import React from 'react';
import { Link } from 'react-router-dom';
import './footer.scss'

const Footer = () => {
    return (
        <footer className='yeshtrey-footer'>
            <section className='about-and-contact-info content'>
                <section className='yeshtrey-info'>
                    <img alt="yeshtrey" src={process.env.PUBLIC_URL + "/images/footer/yeshtrey-logo.png"} />
                    <p className='about-yeshtery'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                        <br />
                        <br />

                        Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed dia
                        <br />
                        <br />
                        m nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                    </p>
                </section>
                <hr className='vertical-line' />
                <section className='subscribe-routes-and-social-links'>
                    <div className='subscribe'>
                        <h3>Subscribe to our newsletter</h3>
                        <form className='subscribe-form'>
                            <input placeholder='Enter Your Mail' />
                            <button type="submit">Subscribe<img alt='send message' src={process.env.PUBLIC_URL + "/images/footer/telegram-icon.png"} /></button>
                        </form>
                    </div>
                    <div className='routes-and-social-links'>
                        <div className='routes'>
                            <Link to={"about-us"}>About Us</Link>
                            <Link to={"contact-us"}>Contact Us</Link>
                            <Link to={"track-order"}>Track Order</Link>
                            <Link to={"terms-&-conditions"}>Terms & Conditions</Link>
                            <Link to={"privacy-policy"}>Privacy Policy</Link>
                            <Link to={"sell-with-us"}>Sell With Us</Link>
                            <Link to={"shipping-and-returns"}>Shipping And Returns</Link>
                        </div>
                        <hr className='vertical-line' />
                        <div className='social-links'>
                            <a target="_blank" href='www.yeshtery-link-to-scial.com/YESHTERY'><img src={process.env.PUBLIC_URL + "/images/footer/facebook.png"} alt="yeshtery-facebook" />/YESHTERY</a>
                            <a target="_blank" href='www.yeshtery-link-to-scial.com/YESHTERY'><img src={process.env.PUBLIC_URL + "/images/footer/linked-in.png"} alt="yeshtery-linked-in" />/YESHTERY</a>
                            <a target="_blank" href='www.yeshtery-link-to-scial.com/YESHTERY'><img src={process.env.PUBLIC_URL + "/images/footer/instgram.png"} alt="yeshtery-instgram" />/YESHTERY</a>
                            <a target="_blank" href='www.yeshtery-link-to-scial.com/YESHTERY'><img src={process.env.PUBLIC_URL + "/images/footer/twitter.png"} alt="yeshtery-twitter" />/YESHTERY</a>
                        </div>
                    </div>
                </section>
            </section>
            <hr />
            <section className='rights-and-payments content'>
                <small>
                    © 2021 yeshtery, all rights reserved.
                </small>
                <div>
                    <img alt="visa" src={process.env.PUBLIC_URL + "/images/footer/visa.png"} />
                    <img alt="master card" src={process.env.PUBLIC_URL + "/images/footer/master-card.png"} />
                    <img alt="cash on delivery" src={process.env.PUBLIC_URL + "/images/footer/cash-on-delivery.png"} />
                </div>
                <small>
                    Powered By
                    <img alt='nasnav ~' src={process.env.PUBLIC_URL + "/images/footer/nasnav.png"} />
                </small>
            </section>
        </footer>
    );
}

export default Footer;
