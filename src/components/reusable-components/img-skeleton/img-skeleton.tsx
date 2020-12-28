import React, { SyntheticEvent, useState } from "react";
import "./img-skeleton.scss";
import semantic from "../../../src_/img/semantic.png";

type ImgSkeletonPropsType = {
  skeletonStyle?: React.CSSProperties;
  src?: string;
  title?: string;
  classes?: string[];
};

const ImgSkeleton = ({
  skeletonStyle,
  src,
  title,
  classes = [],
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
        <div style={skeletonStyle} className="imgSkeleton" />
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
        <img src={semantic} alt={title} className={classes.join(" ")} />
      )}
    </>
  );
};

export default React.memo(ImgSkeleton);
