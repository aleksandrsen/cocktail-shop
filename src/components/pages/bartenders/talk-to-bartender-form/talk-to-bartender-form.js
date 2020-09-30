import React from "react";
import "./talk-to-bartender-form.scss";
import validate from "./validate";
// Components
import { Field, reduxForm } from "redux-form";
import DefaultButton from "../../../common-components/default-button";

const renderField = ({ input, meta: { touched, error, valid }, label }) => {
  const condition = touched && error ? "invalid" : valid ? "valid" : "";
  return (
    <div className="formControl">
      <label htmlFor="some">{label}</label>
      <input type="text" {...input} data-state={condition} />
      {touched && error && <span className="error">{error}</span>}
    </div>
  );
};

const renderFieldTextarea = ({
  input,
  meta: { touched, error, valid },
  label,
}) => {
  const condition = touched && error ? "invalid" : valid ? "valid" : "";
  return (
    <div className="formControl">
      <label htmlFor="some">{label}</label>
      <textarea type="text" {...input} data-state={condition} />
      {touched && error && <span className="error">{error}</span>}
    </div>
  );
};

let TalkToBartenderForm = ({ btnText, btnPos, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="talk-to-bartender-form" noValidate>
      <Field component={renderField} name="name" label="Full name" />
      <Field component={renderField} name="email" label="Email" />
      <Field component={renderFieldTextarea} name="message" label="Message" />
      <DefaultButton type="submit">Send message</DefaultButton>
    </form>
  );
};

TalkToBartenderForm = reduxForm({
  form: "talkToBartender",
  validate,
})(TalkToBartenderForm);

export default TalkToBartenderForm;

// disable button --------------------------------------------------------------------------
