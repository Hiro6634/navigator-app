import React from 'react';
import { NavLink } from 'react-router-dom';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css';

const navigationItems = (props) => (
    // <ul className={classes.NavigationItems}>
    <nav className={classes.NavigationItems}>
        <NavLink to="/araca">ARACA</NavLink>
        <NavLink to="/" exact>Main Page</NavLink>
        {props.isAuthenticated 
            ? <NavLink to="/page1">Page One</NavLink>
            : null }
        {!props.isAuthenticated
            ? <NavLink to="/signin">Sign In</NavLink>
            : <NavLink to="/logout">Logout</NavLink>}
    </nav>
    // </ul>
);

export default navigationItems;
