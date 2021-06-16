import { RefObject, useCallback, useEffect, useState } from "react";
import { isInViewport } from "./index";
import {useLocation} from "react-router-dom";

export const useMedia = (
  queries: string[],
  values: number[],
  defaultValue: number
) => {
  const mediaQueryLists = queries.map((q) => window.matchMedia(q));

  const getValue = useCallback(() => {
    const index = mediaQueryLists.findIndex((mql) => mql.matches);
    return values[index] ? values[index] : defaultValue;
  }, [mediaQueryLists, values, defaultValue]);

  const [value, setValue] = useState(getValue);

  useEffect(() => {
    const handler = () => setValue(getValue);
    mediaQueryLists.forEach((mql) => mql.addListener(handler));
    return () => mediaQueryLists.forEach((mql) => mql.removeListener(handler));
  }, [getValue, mediaQueryLists]);

  return value;
};

export const useIsShowAnimation = (ref: RefObject<any>, name?: string) => {
  const [isShow, setIsShow] = useState(true);

  const location = useLocation();

  useEffect(() => {
    if (ref?.current) {

      const windowOffset = window.pageYOffset;

      console.log(windowOffset, "windowOffset")
      console.log(name, isInViewport(ref.current), ref.current.offsetTop, windowOffset)

      if (isInViewport(ref.current) || ref.current.offsetTop <= windowOffset) {
        setIsShow(false);
        console.log("inside")
      }

    }
  }, [ref?.current, location]);

  return isShow;
};
