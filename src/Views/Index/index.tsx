// src/Views/Index/index.tsx
import React from 'react';

import {Header} from '../../Components';

const Index:React.FC = () => {
	return (
		<React.Fragment>
			<Header/>
			<div className="section">首页</div>
			<div className="section">情报</div>
			<div className="section">干员</div>
			<div className="section">世界观</div>
			<div className="section">档案</div>
			<footer>尾栏</footer>
		</React.Fragment>
	);
}

export default Index;