// src/Components/Header/Navigation/index.tsx
import React, { useState } from 'react';
import classnames from 'classnames';

import NavContent from './NavContent';

const Navigation: React.FC = () => {
	const [isExpanded, switchState] = useState(true);
	const [curIndex, switchIndex] = useState(0);

	// 根据isExpanded的状态更改a标签类名
	const statusClass = classnames({
		'collapsed': !isExpanded,
		'expanded': isExpanded,
	});

	/* 点击切换状态事件 */
	const updataNavStatus = (event:any) => {
		
		switchState(!isExpanded);

		// 通过事件委托来查出点击的a元素是父元素的子元素下标
		const curEleChilds = event.target.parentNode.childNodes;
		if(curEleChilds[0].getAttribute('class') === 'nav-link-name-e') {
			const curElement =event.target.parentNode;
			const nodeArr : Array<HTMLElement> = Array.from(curElement.parentNode.childNodes);
			const curEleIndex = nodeArr.indexOf(curElement);
			switchIndex(() => curEleIndex);
		}
	}

	return (
		<React.Fragment>
			<div className={classnames('header', statusClass)} onClick={updataNavStatus}>
				<a href="javascript:" className={classnames('button-menu', statusClass)}>
					<span className="button-bar"></span>
					<span className="button-bar"></span>
					<span className="button-bar"></span>
				</a>
				{isExpanded ? <NavContent currentIndex={curIndex} /> : null}
			</div>
		</React.Fragment>
	);
}

export default Navigation;