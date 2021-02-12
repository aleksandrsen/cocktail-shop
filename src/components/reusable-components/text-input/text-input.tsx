import React, { useState, FocusEvent, SyntheticEvent } from "react";
import "./text-input.scss";
// Utils
import { FieldMetaProps, useField } from "formik";

type TextInputPropsType = {
  name: string;
  type: string;
  label?: string;
  textarea?: boolean;
  showError?: boolean;
  placeholder?: string;
  handleBlur?: (name: string, meta: FieldMetaProps<void>) => void;
};

const TextInput = ({
  name,
  type,
  label,
  textarea,
  handleBlur,
  placeholder,
  showError = true,
}: TextInputPropsType) => {
  const [fieldType, setFieldType] = useState("password");
  const [focused, setFocused] = useState(false);
  const [field, meta] = useField({
    name,
    type: type === "password" ? fieldType : type,
    placeholder,
  });

  const handleFocus = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFocused(!focused);

  const handleBlurField = (
    e: SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    field.onBlur(e);
    setFocused(false);
    if (handleBlur) handleBlur(name, meta);

    console.log(meta, "-----");
  };

  const toggleFieldType = () => {
    if (fieldType === "password") return setFieldType("text");
    setFieldType("password");
  };

  return (
    <div
      className={`textInput ${focused ? "focused" : ""} ${
        meta.touched && meta.error ? "error" : ""
      }`}
    >
      <label htmlFor={label}>{label}</label>
      {!textarea ? (
        <>
          <input
            className={`textInput__input ${
              type === "password" ? "password" : ""
            }`}
            {...field}
            type={type === "password" ? fieldType : type}
            name={name}
            placeholder={placeholder}
            onFocus={handleFocus}
            onBlur={handleBlurField}
            id={label ? label : undefined}
          />
          {type === "password" && (
            <svg
              onClick={toggleFieldType}
              width="16"
              height="16"
              className={`textInput__togglePasswordView ${
                fieldType === "text" ? "view" : ""
              }`}
            >
              <use xlinkHref="#password-eye" />
            </svg>
          )}
        </>
      ) : (
        <textarea
          className="textInput__input"
          {...field}
          name={name}
          placeholder={placeholder}
          onFocus={handleFocus}
          onBlur={handleBlurField}
          id={label ? label : undefined}
        />
      )}
      {showError && meta.touched && meta.error && (
        <div className="textInput__error">{meta.error}</div>
      )}
    </div>
  );
};

export default TextInput;
