// src/Components/Header/Navigation/index.tsx
import React, { useState } from 'react';
import classnames from 'classnames';

import NavContent from './NavContent';

const Navigation: React.FC = () => {
	const [isExpanded, switchState] = useState(true);				// 展开/收缩状态
	const [curIndex, switchIndex] = useState(0);						// 点击导航内容下标
	const [isDuringDelay,controlDelay] = useState(false);		// 开启/关闭延时状态

	// 根据isExpanded的状态更改a标签类名
	const statusClass = classnames({
		'collapsed': !isExpanded,
		'expanded': isExpanded,
	});

	/* 点击切换状态事件 */
	const updataNavStatus = (event:any) => {
		// 更改展开/收缩状态，开启延时
		controlDelay(() => true);
		switchState(!isExpanded);

		// 通过事件委托来查出点击的a元素是父元素的子元素下标
		const curEleChilds = event.target.parentNode.childNodes;
		if(curEleChilds[0].getAttribute('class') === 'nav-link-name-e') {
			const curElement =event.target.parentNode;
			const nodeArr : Array<HTMLElement> = Array.from(curElement.parentNode.childNodes);
			const curEleIndex = nodeArr.indexOf(curElement);
			switchIndex(() => curEleIndex);
		}

		// 延时打开/关闭NavContent
		setTimeout(() => {
			controlDelay(() => false);
		},300)

	}

	return (
		<React.Fragment>
			<div className={classnames('header', statusClass)} onClick={updataNavStatus}>
				<a href="javascript:" className={classnames('button-menu', statusClass)}>
					<span className="button-bar"></span>
					<span className="button-bar"></span>
					<span className="button-bar"></span>
				</a>

				{/*	打开时立即打开，关闭时延时关闭 */}
				{isExpanded 
					? 
						<NavContent  isExpanded={isExpanded} isDuringDelay={isDuringDelay} currentIndex={curIndex} /> 
					: 
						isDuringDelay ? <NavContent  isExpanded={isExpanded} isDuringDelay={isDuringDelay} currentIndex={curIndex} />  : null
				}
			</div>
		</React.Fragment>
	);
}

export default Navigation;