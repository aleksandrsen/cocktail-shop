import React from 'react';
import './nav-bar.scss';

function NavBar(props) {

    return (
        <nav>
            <div className="nav-wrapper">
                <ul className="right">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Cocktails</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Contacts</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;
