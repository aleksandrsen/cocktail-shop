import React, {useState} from 'react';
import "./main-menu.scss"
import {Link} from "react-router-dom";

function MainMenu(props) {

    let [link, setLink] = useState(0);

    const navLinks = [
        {
            text: "Home",
            to: "/"
        },
        {
            text: "About us",
            to: "about"
        },
        {
            text: "Cocktails",
            to: "/cocktails"
        },
        {
            text: "Music&Event",
            to: "/music-event"
        },
        {
            text: "Bartender's",
            to: "/bartenders"
        },
        {
            text: "Blog",
            to: "/blog"
        },
        {
            text: "Contact",
            to: "/contact"
        }
    ];

    return (
        <nav className="main-menu">
            <div className="nav-wrapper">
                <ul>
                    {
                        navLinks.map((navLink, idx) => {
                            let {text, to} = navLink;
                            return (
                                <li key={text}>
                                    <Link to={to}
                                          className={idx === link ? 'active' : ''}
                                          onClick={e => setLink(idx)}>
                                        {text}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </nav>
    )
}

export default MainMenu;
