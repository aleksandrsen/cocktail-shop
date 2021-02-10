import React, { useState } from "react";
import "./login-form.scss";
// Utils
import { connect } from "react-redux";
import * as Yup from "yup";
// Components
import { Checkbox } from "antd";
import { Form, Formik } from "formik";
import TextInput from "../../reusable-components/text-input";
import RippleButton from "../../reusable-components/ripple-button/ripple-button";
// Types
import { CheckboxChangeEvent } from "antd/es/checkbox";

type FormValuesType = {
  [key: string]: string;
};

const LoginForm = () => {
  const [rememberMe, setRememberMe] = useState(false);

  const toggleRememberMe = (e: CheckboxChangeEvent) =>
    setRememberMe(!rememberMe);

  const handleSubmit = (values: FormValuesType) => {
    console.log(values, "---");
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email("Invalid email address")
          .required("This field is required"),
        password: Yup.string()
          .min(3, "Must be at least 8 characters")
          .required("This field is required"),
      })}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className="loginForm" noValidate>
          <TextInput name="email" type="email" label="Email" />
          <TextInput
            name="password"
            type="password"
            label="Password"
            showError={false}
          />
          <div className="loginForm__options">
            <Checkbox
              onChange={toggleRememberMe}
              checked={rememberMe}
              className="rememberMe"
            >
              Remember me
            </Checkbox>
            {/*<div className="rememberMe"></div>*/}
            <a className="forgotPassword">Forgot password?</a>
          </div>
          <RippleButton type="submit">Log in</RippleButton>
          <button className="loginForm__signInBtn">Sign In</button>
        </Form>
      )}
    </Formik>
  );
};

export default connect(null, null)(React.memo(LoginForm));
