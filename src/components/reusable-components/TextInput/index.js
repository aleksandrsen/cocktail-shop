import React from "react";
import "./index.scss";
import { useField } from "formik";

const TextInput = (props) => {
  const [field, meta] = useField({ ...props });
  console.log(meta);
  return (
    <div className="textInput">
      {!props.textarea ? (
        <input className="textInput__input" {...field} {...props} />
      ) : (
        <textarea className="textInput__input" {...field} {...props} />
      )}
      <span className="textInput__focus" />
    </div>
  );
};

export default TextInput;
