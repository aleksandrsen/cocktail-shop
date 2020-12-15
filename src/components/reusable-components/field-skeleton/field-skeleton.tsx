import React from "react";
import "./field-skeleton.scss";

interface FieldSkeletonProps {
  styles: object;
  className: string;
}

const FieldSkeleton = ({ styles, className }: FieldSkeletonProps) => (
  <div style={styles} className={`fieldSkeleton ${className || ""}`} />
);

export default FieldSkeleton;
