import React from "react";
import "./header.scss";
import logo from "../../img/logo.png";
// Components
import MainMenu from "./main-menu";
import ShoppingCart from "./shopping-cart";
import WishList from "./wish-list";
import Login from "../auth/Login";

const Header = (props) => (
  <header className="header">
    <div className="container-fluid">
      <img className="header__logo" src={logo} alt="" />
      <MainMenu />
      <div className="header__wrapper">
        <WishList />
        <ShoppingCart />
        <Login />
      </div>
    </div>
  </header>
);

export default Header;
