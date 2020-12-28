// src/Components/Header/Navigation/index.tsx
import React, { useState } from 'react';
import classnames from 'classnames';

import NavContent from './NavContent';

const Navigation: React.FC = () => {
	const [isExpanded, switchState] = useState(true);

	// 根据isExpanded的状态更改a标签类名
	const statusClass = classnames({
		'collapsed': !isExpanded,
		'expanded': isExpanded,
	});

	const updataNavStatus = () => {
		switchState(!isExpanded)
	}

	return (
		<React.Fragment>
			<div className={classnames('header', statusClass)} onClick={updataNavStatus}>
				<a href="javascript:" className={classnames('button-menu', statusClass)}>
					<span className="button-bar"></span>
					<span className="button-bar"></span>
					<span className="button-bar"></span>
				</a>
				{isExpanded ? <NavContent /> : null}
			</div>
		</React.Fragment>
	);
}

export default Navigation;