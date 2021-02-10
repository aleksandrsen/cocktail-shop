import React, { useState } from "react";
import "./auth.scss";
// Components
import LoginForm from "./login-form";
import SignInForm from "./sign-in-form";
import ForgotPasswordForm from "./forgot-password";

type AuthPropsType = {
  toggleOpen: () => void;
};

const Auth = ({ toggleOpen }: AuthPropsType) => {
  const [activeForm, setActiveForm] = useState({
    login: true,
    signIn: false,
    forgotPassword: false,
  });

  // const setActiveForm = formName => e => setActiveForm({...activeForm, [formName]: })

  return (
    <div className="auth">
      <div className="auth__header">
        <div className="auth__title">
          {activeForm.login || activeForm.forgotPassword ? "Log in" : "Sign in"}
          <button className="auth__closeBtn" onClick={toggleOpen}>
            <svg width="25" height="25">
              <use xlinkHref="#close-icon" />
            </svg>
          </button>
        </div>
      </div>
      <div className="auth__content">
        <div className="auth__formsWrapper">
          {activeForm.login ? (
            <LoginForm />
          ) : activeForm.signIn ? (
            <SignInForm />
          ) : activeForm.forgotPassword ? (
            <ForgotPasswordForm />
          ) : (
            ""
          )}
        </div>
        <div className="auth__signInWith">
          <div className="subTitle">Sign in with</div>
          <button>
            <svg width="16" height="16" className="facebookIcon">
              <use xlinkHref="#login-facebook" />
            </svg>
            Facebook
          </button>
          <button>
            <svg width="16" height="16">
              <use xlinkHref="#login-google" />
            </svg>
            Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Auth);
