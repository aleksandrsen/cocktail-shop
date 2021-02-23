import React, { useEffect, useState } from "react";
import "./custom-checkbox.scss";

type CheckboxPropsType = {
  data?: any;
  label?: string;
  value: boolean;
  onChange: (
    bool: boolean,
    e?: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLDivElement>,
    data?: any
  ) => void;
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
      <label className={`${checked ? "checked" : ""}`}>
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
