import React from "react";
import "./default-button.scss";

const DefaultButton = ({ children, isLink, size, linkPath, type, onClick }) =>
  isLink ? (
    <a
      className={`default-button ${size ? size : ""}`}
      href={linkPath || ""}
      onClick={onClick}
    >
      {children}
    </a>
  ) : (
    <button
      className={`default-button ${size ? size : ""}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );

export default DefaultButton;
