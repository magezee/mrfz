// src/Components/Header/Navigation/index.tsx
import React,{useState} from 'react';
import classnames from 'classnames';

import NavContent from './NavContent';

const Navigation:React.FC = () => {
    const [isExpanded, switchState] = useState(false);

    const menuClass = classnames({
        'button-menu': true,
        'collapsed': !isExpanded,
        'expanded': isExpanded,
    });

    return (
        <React.Fragment>
            <div className="header collapsed">
                <a href="javascript:" className={menuClass}>
                    <span className="button-bar"></span>
                    <span className="button-bar"></span>
                    <span className="button-bar"></span>
                </a>
                { isExpanded ? <NavContent/> : null }
            </div>
        </React.Fragment>
    );
}

export default Navigation;