import React from "react";
import "./section.scss";

const Section = ({ classNames, children }) => (
  <section className={`default-section ${classNames ? classNames : ""}`}>
    {children}
  </section>
);

export default Section;
