import React from "react";
import "./header.scss";
import logo from "../../img/logo.png";
// Components
import MainMenu from "./main-menu";
import ShoppingCart from "./shopping-cart";
import WishList from "./wish-list";
import LogOutLogInBtn from "./logOut-logIn-btn";
// Antd
import { PageHeader } from "antd";

const Header = (props) => (
  <header>
    <PageHeader title="Title">
      <img className="logo" src={logo} alt="" />
      <MainMenu />
      <div className="right-block">
        <WishList />
        <ShoppingCart />
        <LogOutLogInBtn />
      </div>
    </PageHeader>
  </header>
);

export default Header;
