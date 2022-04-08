import React from 'react';
import SearchHeader from './SearchHeader/SearchHeader';
import YellowHeader from './YellowHeader/YellowHeader';
import './header.scss';
import { Link } from 'react-router-dom';
import getProductCategorization from '../../services/fullCategorization';

const Header = ({ cartItemsCount }) => {
    return (
        <header className='yeshtery-header'>
            <YellowHeader />
            <SearchHeader cartItemsCount={cartItemsCount} />
            <div className='sex-categorization-links' >
                <div className='content'>
                    <Link to="/Men" >Men</Link>
                    <Link to="/Women" >Women</Link>
                    <Link to="/Unisex" >Unisex</Link>
                    <Link to="/Kids" >Kids</Link>
                    <Link to="/Best-Sellers" >Best Sellers</Link>
                    <Link to="/New-Arrivals" >New Arrivals</Link>
                    <Link to="/Offers" >Offers</Link>
                </div>
            </div>
            <div className='full-categorization'>
                <div className='content'>
                    <div>
                        {getProductCategorization().map(
                            (category, index) =>
                                <>
                                    {index !== 0 && <>/&ensp;</>}
                                    <Link to={"/" + category}>{category} </Link>
                                </>
                        )}
                    </div>
                </div>
            </div>
            <hr />
        </header>
    );
}

export default Header;
