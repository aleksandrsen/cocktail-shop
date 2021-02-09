import React from "react";
import "./field-skeleton.scss";

interface FieldSkeletonProps {
  styles?: React.CSSProperties;
  className?: string;
}

const FieldSkeleton = ({ styles, className = "" }: FieldSkeletonProps) => (
  <span style={styles} className={`fieldSkeleton ${className}`} />
);

export default FieldSkeleton;
