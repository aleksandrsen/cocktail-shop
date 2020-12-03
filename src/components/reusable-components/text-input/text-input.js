import React, { useState } from "react";
import "./text-input.scss";
// Utils
import { useField } from "formik";

const TextInput = ({ name, type, placeholder, textarea }) => {
  const [focused, setFocused] = useState(false);
  const [field, meta] = useField({ name, type, placeholder });

  const handleFocus = (e) => setFocused(!focused);

  const handleBlur = (e) => {
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
      {meta.touched && meta.error ? (
        <div className="textInput__error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default TextInput;
