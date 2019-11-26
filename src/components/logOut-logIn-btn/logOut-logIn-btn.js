import React from 'react';
import './logOut-logIn-btn.scss';
import {connect} from "react-redux"

function LogOutLogInBtn(props) {
    let {isLogin, userLoginAction, userLogOutAction} = props;

    return (
        <a className="logOut-logIn">{isLogin ? 'Log Out' : 'Log In'}</a>
    );
}

const mapStateToProps = (state) => {
    return {
        isLogin: state.isLogin
    }
};

export default connect(mapStateToProps)(LogOutLogInBtn);