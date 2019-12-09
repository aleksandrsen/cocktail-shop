import React from 'react';
import './logOut-logIn-btn.scss';
import {connect} from "react-redux"
import {userLogIn, userLogOut} from "../../actions";

function LogOutLogInBtn(props) {
    let {isLogin, userLogIn, userLogOut} = props;

    return (
        <a className="logOut-logIn">{isLogin ? 'Log Out' : 'Log In'}</a>
    );
}

export default connect((state) => {
    return {
        isLogin: state.user.logIn
    }
}, {userLogIn, userLogOut})(LogOutLogInBtn);