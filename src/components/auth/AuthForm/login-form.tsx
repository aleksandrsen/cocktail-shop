import React, { useState } from "react";
import "./login-form.scss";
// Utils
import * as Yup from "yup";
import { connect } from "react-redux";
import { validateFields } from "./validate";
// Components
import { Checkbox } from "antd";
import { Form, Formik } from "formik";
import TextInput from "../../reusable-components/text-input";
import RippleButton from "../../reusable-components/ripple-button/ripple-button";
// Types
import { ActiveFormType } from "../auth";
import { CheckboxChangeEvent } from "antd/es/checkbox";

type FormValuesType = {
  [key: string]: string;
};

type LoginFormPropsType = {
  activeForm: ActiveFormType;
  toggleFormsView: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const AuthForm = ({ activeForm, toggleFormsView }: LoginFormPropsType) => {
  const [rememberMe, setRememberMe] = useState(false);

  const toggleRememberMe = (e: CheckboxChangeEvent) =>
    setRememberMe(!rememberMe);

  const handleSubmit = (values: FormValuesType) => {
    console.log(values, "---");
  };

  return (
    <Formik
      initialValues={
        activeForm.login
          ? {
              email: "",
              password: "",
            }
          : activeForm.signIn
          ? {
              email: "",
              password: "",
              firstName: "",
              lastName: "",
              phone: "",
            }
          : {
              email: "",
            }
      }
      validationSchema={Yup.object(validateFields(activeForm))}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className="loginForm" noValidate>
          {activeForm.signIn && (
            <>
              <TextInput name="firstName" type="text" label="First name" />
              <TextInput name="lastName" type="text" label="Last name" />
              <TextInput name="phone" type="tel" label="Phone number" />
            </>
          )}
          <TextInput name="email" type="email" label="Email" />
          {(activeForm.login || activeForm.signIn) && (
            <TextInput
              name="password"
              type="password"
              label="Password"
              showError={!activeForm.login}
            />
          )}

          {activeForm.login && (
            <div className="loginForm__options">
              <Checkbox
                onChange={toggleRememberMe}
                checked={rememberMe}
                className="rememberMe"
              >
                Remember me
              </Checkbox>
              <button
                className="forgotPassword"
                onClick={toggleFormsView}
                data-value="forgotPassword"
              >
                Forgot password?
              </button>
            </div>
          )}
          <RippleButton
            type="submit"
            style={activeForm.forgotPassword ? { marginTop: "30px" } : {}}
          >
            <>
              {activeForm.login
                ? "Log in"
                : activeForm.signIn
                ? "Sign In"
                : "Send Reset Instructions"}
            </>
          </RippleButton>
          <button
            className="loginForm__signInBtn"
            onClick={toggleFormsView}
            data-value={activeForm.login ? "signIn" : "login"}
            form="buttonOnLoginPage"
          >
            <>
              {activeForm.login
                ? "Sign In"
                : activeForm.signIn
                ? "I am already registered"
                : "I remembered my password"}
            </>
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default connect(null, null)(React.memo(AuthForm));
