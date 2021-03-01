import React, { JSXElementConstructor, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollTop = (): null => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export const cutTextContent = (text: string, maxLength: number): string => {
  if (text.length > maxLength) return text.slice(0, maxLength - 3) + "...";
  return text;
};

export function getSkeletons(
  length: number,
  SkeletonComponent: JSXElementConstructor<any>,
  props: object = {}
): JSX.Element[] {
  return new Array(length)
    .fill(1)
    .map((num, idx) => <SkeletonComponent key={`${num}${idx}`} {...props} />);
}

type DateOptionItem = "2-digit" | "numeric";

type DateOptionsObj = {
  year?: DateOptionItem;
  month?: DateOptionItem | "narrow" | "short" | "long";
  weekday?: "narrow" | "short" | "long";
  day?: DateOptionItem;
  hour?: DateOptionItem;
  minute?: DateOptionItem;
};

export const formatDate = (
  date: string | Date | undefined,
  optionsObj?: DateOptionsObj
): string => {
  if (!date) return "";
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

export function searchByFields<T extends object, U extends keyof T>(
  arrayOfObj: T[],
  searchValue: string,
  keyFields: U[]
): T[] {
  const result: T[] = [];
  const term = searchValue.replace(",", " ").toLowerCase();

  arrayOfObj.forEach((obj: T) => {
    const descr = keyFields
      .reduce((arr: T[U][], field) => {
        arr.push(obj[field]);
        return arr;
      }, [])
      .join(" ");

    if (descr.toLowerCase().includes(term)) result.push(obj);
  });
  return result;
}

export const validateEmail = (str: string): boolean =>
  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(str);

export const getTotalValue = <T extends object, K extends keyof T>(
  arr: T[],
  field: K
): number => {
  type Val = {
    [T[K]]: number
  }
  return arr.reduce((sum, item) => sum + item[field], 0)
};
