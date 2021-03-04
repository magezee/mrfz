import React from 'react';

import Navgation from './Navigation';
import Info from './Info';
import  './style.scss';

const Header: React.FC = () => {
	return (
		<header id="header">
			<Navgation />
			<Info/>
		</header>
	)
}

export default Header;