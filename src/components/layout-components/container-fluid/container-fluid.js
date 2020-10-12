import React from "react";
import "./container-fluid.scss";

const ContainerFluid = ({ children, classNames }) => (
  <section className={`container-fluid ${classNames ? classNames : ""}`}>
    {children}
  </section>
);

export default ContainerFluid;
