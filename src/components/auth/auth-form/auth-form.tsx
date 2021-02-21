import React, { useState } from "react";
import "./auth-form.scss";
// Utils
import * as Yup from "yup";
import { connect } from "react-redux";
import { validateFields } from "./validate";
// Components
import { Checkbox } from "antd";
import { FieldMetaProps, Form, Formik } from "formik";
import TextInput from "../../reusable-components/text-input";
import RippleButton from "../../reusable-components/ripple-button/ripple-button";
// Types
import { ActiveFormType } from "../auth";
import { CheckboxChangeEvent } from "antd/es/checkbox";

type FormValuesType = {
  [key: string]: string;
};

type AuthFormPropsType = {
  activeForm: ActiveFormType;
  savedValues: { email: string; password: string };
  toggleFormsView: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleSaveValues: (name: string, meta: FieldMetaProps<void>) => void;
};

const AuthForm = ({
  activeForm,
  savedValues,
  toggleFormsView,
  handleSaveValues,
}: AuthFormPropsType) => {
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
              email: savedValues.email,
              password: savedValues.password,
            }
          : activeForm.signIn
          ? {
              email: savedValues.email,
              password: savedValues.password,
              firstName: "",
              lastName: "",
              phone: "",
            }
          : {
              email: savedValues.email,
            }
      }
      validationSchema={Yup.object(validateFields(activeForm))}
      onSubmit={handleSubmit}
      handleChange={(e: React.ChangeEvent<any>) => console.log(e)}
    >
      {() => (
        <Form className="authForm" noValidate>
          {activeForm.signIn && (
            <>
              <TextInput name="firstName" type="text" label="First name" />
              <TextInput name="lastName" type="text" label="Last name" />
              <TextInput name="phone" type="tel" label="Phone number" />
            </>
          )}
          <TextInput
            name="email"
            type="email"
            label="Email"
            handleBlur={handleSaveValues}
          />
          {(activeForm.login || activeForm.signIn) && (
            <TextInput
              name="password"
              type="password"
              label="Password"
              handleBlur={handleSaveValues}
              showError={!activeForm.login}
            />
          )}

          {activeForm.login && (
            <div className="authForm__options">
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
                form="forgotPasswordButtonOnLoginPage"
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
            className="authForm__signInBtn"
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
