import React from 'react';
import './logOut-logIn-btn.scss';

function LogOutLogInBtn(props) {
    let isAuth = false;

    return (
        <a className="logOut-logIn">{isAuth ? 'Log Out' : 'Log In'}</a>
    );
}

export default LogOutLogInBtn;