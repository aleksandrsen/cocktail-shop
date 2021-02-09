import React, { useState } from "react";
import "./auth.scss";
// Components
import LoginForm from "./login-form";
import SignInForm from "./sign-in-form";
import ForgotPasswordForm from "./forgot-password";

const Auth = () => {
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
          <button className="auth__closeBtn">
              <svg width="25" height="25">
                  <use xlinkHref="#close-icon" />
              </svg>
          </button>

        </div>
      </div>
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
  );
};

export default React.memo(Auth);
