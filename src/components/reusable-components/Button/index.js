import React from "react";
import "./index.scss";

const Button = ({ children, onClick }) => {
  const createRipple = (e) => {
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
    circle.classList.add("ripple");

    const ripple = button.getElementsByClassName("ripple")[0];

    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);
  };

  return <button onClick={createRipple}>{children}</button>;
};

export default Button;
