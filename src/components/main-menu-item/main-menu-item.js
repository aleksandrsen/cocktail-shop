import React from 'react';
import "./main-menu-item.scss"
import {NavLink} from "react-router-dom";

function MainMenuItem(props) {
    let {to, text} = props;

    return (
        <li key={text} className="main-menu-item">
            <NavLink to={to}
                  activeClassName="active"
            >
                {text}
            </NavLink>
        </li>
    )
}

export default MainMenuItem;
