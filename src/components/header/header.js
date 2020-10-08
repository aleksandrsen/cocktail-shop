import React from "react";
import "./header.scss";
import logo from "../../img/logo.png";
// Components
import MainMenu from "./main-menu";
import ShoppingCart from "./shopping-cart";
import WishList from "./wish-list";
import Login from "../auth/Login";
import ContainerFluid from "../layout-components/container-fluid";

const Header = (props) => (
  <header className="header">
    <ContainerFluid>
      <img className="header__logo" src={logo} alt="" />
      <MainMenu />
      <div className="header__wrapper">
        <WishList />
        <ShoppingCart />
        <Login />
      </div>
    </ContainerFluid>
  </header>
);

export default Header;
