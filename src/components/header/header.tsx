import React from "react";
import "./header.scss";
// Utils
import logo from "../../src_/img/logo.png";
// Components
import MainMenu from "./main-menu";
import WishList from "./wish-list";
import MyAccount from "./my-account";
import ShoppingCart from "./shopping-cart";

const Header = () => (
  <header className="header">
    <div className="container">
      <img className="header__logo" src={logo} alt="" />
      <MainMenu />
      <div className="header__wrapper">
        <WishList />
        <ShoppingCart />
        <MyAccount/>
      </div>
    </div>
  </header>
);

export default React.memo(Header);
