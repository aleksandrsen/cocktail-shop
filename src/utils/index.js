import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export const ScrollTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const cutTextContent = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength - 3) + "...";
  }
  return text;
};

export const formatDate = (dateString, optionsObj) => {
  const defaultOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  const date = new Date(Date.parse(dateString));
  const formatter = new Intl.DateTimeFormat("en", optionsObj || defaultOptions);
  return formatter.format(date);
};
