import React from 'react';
import './header.scss';
// Components
import MainMenu from "../main-menu";
import ShoppingCart from "../shopping-cart";
import Logo from "../logo"
import WishList from "../wish-list"
import LogOutLogInBtn from "../logOut-logIn-btn";
// Antd
import {PageHeader} from 'antd';

function Header(props) {

    return (
        <header>
            <PageHeader title="Title">
                <Logo/>
                <MainMenu/>
                <div className="right-block">
                    <WishList/>
                    <ShoppingCart/>
                    <LogOutLogInBtn/>
                </div>
            </PageHeader>
        </header>
    );
}

export default Header;