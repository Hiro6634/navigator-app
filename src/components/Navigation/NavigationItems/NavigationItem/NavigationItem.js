import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItem.css';

const navigationItem = (props) => (
    // <li className={classes.NavigationItem}>
    <div className={classes.navigationItem}>7
        <NavLink
            to={props.link}
            exact={props.exact}
            activeClassName={classes.active}>
                {props.children}
        </NavLink>
    </div>
    // </li>
);

export default navigationItem;