import React from 'react';

import SymsysLogo from '../../asserts/Symsys4.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={SymsysLogo} alt="SymsysLogo"/>
    </div>
);  

export default logo;

