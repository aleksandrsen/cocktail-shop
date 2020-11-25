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

export const formatDate = (date, optionsObj) => {
  const defaultOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  const date_ = typeof date === "string" ? new Date(Date.parse(date)) : date;
  const formatter = new Intl.DateTimeFormat("en", optionsObj || defaultOptions);
  return formatter.format(date_);
};

export const searchByFields = (arrayOfObj, searchValue, keyFields) => {
  const result = [];
  const term = searchValue.replace(",", " ").toLowerCase();

  arrayOfObj.forEach(item => {
    const descr = keyFields
        .reduce((acc, field) => {
          acc.push(item[field]);
          return acc;
        }, [])
        .join(" ");

    if (descr.toLowerCase().includes(term)) {
      result.push(item);
    }
  });
  return result;
}