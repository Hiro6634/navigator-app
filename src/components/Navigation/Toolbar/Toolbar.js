import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToogle from '../SideDrawer/DrawerToggle/DrawerToggle';
import classes from './Toolbar.css';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToogle clicked={props.drawerToggleClicked}/>
        <div className={classes.Logo}>
            <Logo/>
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems isAuthenticates={props.isAuth}/>
        </nav>
    </header>
);

export default toolbar;

// import {ReactComponent as Logo} from '../../asserts/link.svg';
//import logo from '../../asserts/Symsys_200x200.png';
// import logo from '../../asserts/Symsys4.png';

// const NavigatonBar = () => (
//     <div className='navigation-bar'>
//         <Link className='logo-container' to="/">
//             {/* <Logo className='logo'/> */}
//             <img src={logo} alt='logo' className='logo'/>
//         </Link>
//         <div className='options'>
//             <Link className='option' to="/page1">
//                 PAGE_ONE
//             </Link>
//             <Link className='option' to="/page2">
//                 PAGE_TWO
//             </Link>
//             <Link className='option' to="/about">
//                 ABOUT
//             </Link>
//         </div>
//     </div>
// );

// export default NavigatonBar;