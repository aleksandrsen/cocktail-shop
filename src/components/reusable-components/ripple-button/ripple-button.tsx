import React, { ReactChildren, ReactNode } from "react";
import "./ripple-button.scss";

type RippleButtonPropsType = {
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  children: ReactChildren | ReactNode;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const RippleButton = ({
  onClick,
  children,
  style = {},
  type = "button",
  disabled = false,
  ...rest
}: RippleButtonPropsType) => {
  const createRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) onClick(e);

    const button = e.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${
      e.clientX + window.scrollX - button.offsetLeft - radius
    }px`;
    circle.style.top = `${
      e.clientY + window.scrollY - button.offsetTop - radius
    }px`;
    circle.classList.add("rippleButton__ripple");

    const ripple = button.getElementsByClassName("rippleButton__ripple")[0];

    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);
  };

  return (
    <button
      onClick={createRipple}
      className="rippleButton"
      type={type}
      disabled={disabled}
      {...rest}
      style={style}
      data-test="rippleButton"
    >
      {children}
    </button>
  );
};

export default React.memo(RippleButton);
