import React, {useState} from 'react';
import "./main-menu.scss"
import MainMenuItem from "../main-menu-item";

function MainMenu(props) {

    let [activeLinkIdx, setActiveLinkIdx] = useState(0);

    const navLinks = [
        {
            text: "Home",
            to: "/"
        },
        {
            text: "About us",
            to: "/about"
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
                            return <MainMenuItem key={text}
                                                 isActive={idx === activeLinkIdx}
                                                 idx={idx}
                                                 to={to}
                                                 text={text}
                                                 setActiveLinkIdx={setActiveLinkIdx}/>
                        })
                    }
                </ul>
            </div>
        </nav>
    )
}

export default MainMenu;
