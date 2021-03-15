import React, { SyntheticEvent, useState } from "react";
import "./img-skeleton.scss";
import semantic from "../../../src_/img/semantic.png";

type ImgSkeletonPropsType = {
  src?: string;
  title?: string;
  classes?: string[];
  skeletonClasses?: string[];
  skeletonStyle?: React.CSSProperties;
};

const ImgSkeleton = ({
  skeletonStyle,
  src,
  title,
  classes = [],
  skeletonClasses = [],
}: ImgSkeletonPropsType) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  const handleError = (e: SyntheticEvent<HTMLImageElement>): void => {
    if (src) setError(true);
  };

  const handleLoad = (e: SyntheticEvent<HTMLImageElement>): void =>
    setIsLoaded(true);

  return (
    <>
      {!isLoaded && !error && (
        <div
          style={skeletonStyle}
          className={`imgSkeleton ${skeletonClasses.join(" ")}`}
        />
      )}
      <img
        style={!isLoaded ? { width: 0, height: 0, opacity: 0 } : {}}
        className={classes.join(" ")}
        src={src}
        alt={title}
        onLoad={handleLoad}
        onError={handleError}
      />
      {error && (
        <img
          src={semantic}
          alt={title}
          className={`${classes.join(" ")} imgSkeleton__semantic`}
        />
      )}
    </>
  );
};

export default React.memo(ImgSkeleton);
