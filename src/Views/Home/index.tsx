// src/Views/Home/index.tsx
import React from 'react';

function Home() {
	return (
		<React.Fragment>
			<header id="header">头栏</header>
			<div className="section">首页</div>
			<div className="section">情报</div>
			<div className="section">干员</div>
			<div className="section">世界观</div>
			<div className="section">档案</div>
			<footer>尾栏</footer>
		</React.Fragment>
	);
}

export default Home;