// src/Components/Header/Info/index.tsx
import React from 'react';

const Info: React.FC = () => {
  return (
    <React.Fragment>
      <div className="header-info">
        <ul className="header-info-list">
          <li className="header-info-item">
            <a href="/user/login" className="header-info-link">登录</a>
          </li>
          <li className="header-info-item">|</li>
          <li className="header-info-item">
            <a href="/user/register" className="header-info-link">注册</a>
          </li>
          <li className="header-info-item header-info-item-wide">
            <a href="javascript:" className="header-info-link">联系客服</a>
          </li>
        </ul>
      </div>
    </React.Fragment>
  )
}

export default Info;