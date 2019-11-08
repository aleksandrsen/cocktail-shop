import React from 'react';

function NavBar(props) {

    return (
        <nav>
            <div className="nav-wrapper">
                <ul className="right">
                    <li><a href="#" className="active">Home</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Cocktails</a></li>
                    <li><a href="#">Music&Event</a></li>
                    <li><a href="#">Bartender's</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;
