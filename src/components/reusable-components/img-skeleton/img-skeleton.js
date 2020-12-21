import React, { useState } from "react";
import "./img-skeleton.scss";
import semantic from "../../../src_/img/semantic.png";

const ImgSkeleton = ({ skeletonStyle, src, title, classes }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  const handleError = (e) => {
    if (src) setError(true);
  };

  return (
    <>
      {!isLoaded && !error && (
        <div style={skeletonStyle} className="imgSkeleton" />
      )}
      <img
        style={!isLoaded ? { width: 0, height: 0, opacity: 0 } : {}}
        className={classes ? classes.join(" ") : ""}
        src={src}
        alt={title}
        onLoad={(e) => setIsLoaded(true)}
        onError={handleError}
      />
      {error && (
        <img
          src={semantic}
          alt={title}
          className={classes ? classes.join(" ") : ""}
        />
      )}
    </>
  );
};

export default ImgSkeleton;
