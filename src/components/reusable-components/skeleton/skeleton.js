import React, { useState } from "react";
import "./skeleton.scss";

const ImgSkeleton = ({ skeletonStyle, src, title, classes }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && <div style={skeletonStyle} className="imgSkeleton" />}
      <img
        style={!isLoaded ? { width: 0, height: 0 } : {}}
        className={classes.join(" ")}
        src={src}
        alt={title}
        onLoad={(e) => setIsLoaded(true)}
        onError={(e) => setIsLoaded(true)}
      />
    </>
  );
};

export default ImgSkeleton;
