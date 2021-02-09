import React from "react";
import "./sign-in-form.scss";
// Utils
import { connect } from "react-redux";

const SignInForm = () => (
  <div className="signInForm">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, laborum minima
    molestias nostrum odio recusandae sint! Alias atque debitis dolore, esse
    molestiae porro quisquam saepe similique totam ut vitae voluptas!
  </div>
);

export default connect(null, null)(React.memo(SignInForm));
