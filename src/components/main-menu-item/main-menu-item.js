import React from 'react';
import "./main-menu-item.scss"
import {Link} from "react-router-dom";

function MainMenuItem(props) {
    let {to, text, idx, isActive, setActiveLinkIdx} = props;

    return (
        <li key={text} className="main-menu-item">
            <Link to={to}
                  className={isActive ? 'active' : ''}
                  onClick={e => setActiveLinkIdx(idx)}
            >
                {text}
            </Link>
        </li>
    )
}

export default MainMenuItem;
