import React, { useState, FocusEvent, SyntheticEvent } from "react";
import "./text-input.scss";
// Utils
import { useField } from "formik";

type TextInputPropsType = {
  name: string;
  type: string;
  placeholder: string;
  textarea?: boolean;
};

const TextInput = ({
  name,
  type,
  placeholder,
  textarea,
}: TextInputPropsType) => {
  const [focused, setFocused] = useState(false);
  const [field, meta] = useField({ name, type, placeholder });

  const handleFocus = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFocused(!focused);

  const handleBlur = (
    e: SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    field.onBlur(e);
    setFocused(false);
  };

  return (
    <div
      className={`textInput ${focused ? "focused" : ""} ${
        meta.touched && meta.error ? "error" : ""
      }`}
    >
      {!textarea ? (
        <input
          className="textInput__input"
          {...field}
          type={type}
          name={name}
          placeholder={placeholder}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      ) : (
        <textarea
          className="textInput__input"
          {...field}
          name={name}
          placeholder={placeholder}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      )}
      {meta.touched && meta.error && (
        <div className="textInput__error">{meta.error}</div>
      )}
    </div>
  );
};

export default TextInput;
