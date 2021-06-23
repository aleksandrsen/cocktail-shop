import React, { memo } from "react";
import styles from "./header.module.scss";
// Components
import MainMenu from "./main-menu";
import WishList from "./wish-list";
import MyAccount from "./my-account";
import ShoppingCart from "./shopping-cart";
// Utils
import logo from "../../source/img/logo.png";

const Header = () => (
  <header className={styles.header}>
    <div className={styles.headerContainer}>
      <img className={styles.headerLogo} src={logo} alt="" />
      <MainMenu />
      <div className={styles.headerWrapper}>
        <WishList />
        <ShoppingCart />
        <MyAccount />
      </div>
    </div>
  </header>
);

export default memo(Header);
