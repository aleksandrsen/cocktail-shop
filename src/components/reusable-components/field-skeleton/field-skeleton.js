import React from "react";
import "./field-skeleton.scss";

const FieldSkeleton = ({ styles, className }) => (
  <div style={styles} className={`fieldSkeleton ${className || ""}`} />
);

export default FieldSkeleton;
