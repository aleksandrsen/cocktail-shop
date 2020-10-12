import React from "react";
import "./container.scss";

const Container = ({ children, classNames }) => (
  <section className={`container ${classNames}`}>{children}</section>
);

export default Container;
