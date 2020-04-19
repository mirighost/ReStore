import React from 'react';
import { Link } from 'react-router-dom';
import './shop-header.css';

const ShopHeader = () => {
    return (
        <header className='shop-header row'>
            <Link to='/'>
                <div className='logo text-dark'>ReStore</div>
            </Link>
            <Link to='/cart'>
                <div className='shopping-cart'>
                    <i className='cart-icon fa fa-shopping-cart' />
                    Cart Page
                </div>
            </Link>
        </header>
    );
};

export default ShopHeader;
