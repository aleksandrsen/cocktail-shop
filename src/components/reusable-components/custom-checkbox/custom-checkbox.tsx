import React, { useEffect, useState, ChangeEvent, MouseEvent } from "react";
import "./custom-checkbox.scss";

export type onChangeCustomCheckBoxFuncType = (
  bool: boolean,
  e: ChangeEvent<HTMLInputElement> | MouseEvent<HTMLDivElement>,
  data?: any
) => void;

type CheckboxPropsType = {
  data?: any;
  label?: string;
  value: boolean;
  onChange: onChangeCustomCheckBoxFuncType;
};

const CustomCheckbox = ({
  data,
  label,
  value,
  onChange,
}: CheckboxPropsType) => {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(value);
  }, [value]);
  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(!checked);
    onChange(!checked, e, data);
  };
  const handleClickLabel = (e: React.MouseEvent<HTMLDivElement>) => {
    setChecked(!checked);
    onChange(!checked, e, data);
  };

  return (
    <div className="customCheckbox">
      <label className={`${checked ? "checked" : ""} ${label ? "isLabel" : ""}`}>
        <input type="checkbox" checked={checked} onChange={handleChecked} />
      </label>
      {label && (
        <div className="labelText" onClick={handleClickLabel}>
          {label}
        </div>
      )}
    </div>
  );
};

export default CustomCheckbox;
