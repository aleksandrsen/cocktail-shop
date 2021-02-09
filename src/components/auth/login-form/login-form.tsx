import React from "react";
import "./login-form.scss";
// Utils
import { connect } from "react-redux";

const LoginForm = () => (
  <div className="loginForm">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, autem
    commodi delectus distinctio dolor explicabo inventore, iure labore libero
    magni minima nihil nisi non nulla omnis perferendis possimus quisquam rerum.
  </div>
);

export default connect(null, null)(React.memo(LoginForm));
