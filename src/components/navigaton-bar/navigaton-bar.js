import React from 'react';
import { Link } from 'react-router-dom';

import './navigaton-bar.css';

import {ReactComponent as Logo} from '../../asserts/link.svg';

const NavigatonBar = () => (
    <div className='navigation-bar'>
        <Link className='logo-container' to="/">
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to="/page1">
                PAGE_ONE
            </Link>
            <Link className='option' to="/page2">
                PAGE_TWO
            </Link>
            <Link className='option' to="/about">
                ABOUT
            </Link>
        </div>
    </div>
);

export default NavigatonBar;