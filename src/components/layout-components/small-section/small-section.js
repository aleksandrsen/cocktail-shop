import React from "react";
import "./small-section.scss";

const SmallSection = ({ children, classNames }) => (
  <section className={`small-section ${classNames}`}>{children}</section>
);

export default SmallSection;
