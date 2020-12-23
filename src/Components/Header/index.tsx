import React from 'react';

import Navgation from './Navigation';
import './style.scss';

const Header:React.FC = () => {
    return (
        <header id="header">
            <Navgation/>
        </header>
    )
}

export default Header;