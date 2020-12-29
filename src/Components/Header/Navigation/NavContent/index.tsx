// src/Components/Header/Navigation/NavContent/index.tsx
import React from 'react';
import classnames from 'classnames';

interface NavContentProps {
	currentIndex : number;
}

const NavContent: React.FC<NavContentProps> = ({currentIndex}) => {
	return (
		<div className="header-menu">
			<nav className="nav-links">
				<a href="/index#!title" className={classnames('nav-link',{'current': currentIndex === 0})}>
					<span className="nav-link-name-e">Home</span>
					<span className="nav-link-name twoL">首页</span>
				</a>
				<a href="/index#!news" className={classnames('nav-link',{'current': currentIndex === 1})}>
					<span className="nav-link-name-e">News</span>
					<span className="nav-link-name twoL">情报</span>
				</a>
				<a href="/index#!characters" className={classnames('nav-link',{'current': currentIndex === 2})}>
					<span className="nav-link-name-e">Character</span>
					<span className="nav-link-name twoL">干员</span>
				</a>
				<a href="/index#!story" className={classnames('nav-link',{'current': currentIndex === 3})}>
					<span className="nav-link-name-e">Story</span>
					<span className="nav-link-name thrL">世界观</span>
				</a>
				<a href="/index#!archive" className={classnames('nav-link',{'current': currentIndex === 4})}>
					<span className="nav-link-name-e">Archive</span>
					<span className="nav-link-name twoL">档案</span>
				</a>
				<a href="/user" className="nav-link">
					<span className="nav-link-name-e">Dashboard</span>
					<span className="nav-link-name fouL">个人中心</span>
				</a>
			</nav>
		</div>

	)
}

export default NavContent;