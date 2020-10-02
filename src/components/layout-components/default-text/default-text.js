import React from "react";
import "./default-text.scss";

const DefaultText = ({ children, classNames }) => (
  <p className={`default-text ${classNames ? classNames : ""}`}>{children}</p>
);

export default DefaultText;
