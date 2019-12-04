import React from 'react';
import "./main-menu.scss"
import MainMenuItem from "../main-menu-item";

function MainMenu(props) {

    const navLinks = [
        {
            text: "Home",
            to: "/home"
        },
        {
            text: "About us",
            to: "/about"
        },
        {
            text: "Cocktails",
            to: "/cocktails/"
        },
        {
            text: "Music&Event",
            to: "/music-events/"
        },
        {
            text: "Bartender's",
            to: "/bartenders/"
        },
        {
            text: "Blog",
            to: "/blog/"
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
                            return <MainMenuItem key={text}
                                                 to={to}
                                                 text={text}/>
                        })
                    }
                </ul>
            </div>
        </nav>
    )
}

export default MainMenu;
