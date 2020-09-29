import React, { useState } from "react";
import "./logOut-logIn-btn.scss";
import { connect } from "react-redux";
// Actions
import { userLogIn, userLogOut } from "../../../actions";
// Components
import Modal from "../../modal";
import LoginForm from "../../login-form";

const LogOutLogInBtn = ({ isLogin, userLogIn, userLogOut }) => {
  let [visible, setVisible] = useState(false);

  return (
    <>
      <button className="logOut-logIn" onClick={() => setVisible(true)}>
        {isLogin ? "Log Out" : "Log In"}
      </button>
      <Modal visible={visible} setVisible={setVisible} okText="Submit">
        <LoginForm />
      </Modal>
    </>
  );
};

export default connect(
  (state) => ({
    isLogin: state.user.logIn,
  }),
  { userLogIn, userLogOut }
)(LogOutLogInBtn);
