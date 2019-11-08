import React, {useState} from 'react';
import './header.scss';
// Components
import NavBar from "../nav-bar";
import ShoppingCart from "../shopping-cart";
import Logo from "../logo"
import WishList from "../wish-list";
// Antd
import { PageHeader } from 'antd';

function Header(props) {

  return (
      <header>
          <PageHeader
              onBack={() => null}
              title="Title"
              subTitle="This is a subtitle"
          >
              <Logo/>
              <NavBar/>
              <div className="right-block">
                  <WishList/>
                  <ShoppingCart/>
                  {/*<a className="logOut">Log Out</a>*/}
                  <a className="logOut">Log In</a>
              </div>
          </PageHeader>
      </header>
  );
}

export default Header;
