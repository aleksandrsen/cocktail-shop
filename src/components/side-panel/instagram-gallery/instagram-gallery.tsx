import React, { useEffect } from "react";
import "./instagram-gallery.scss";
// Actions
import { fetchInstagramPhotos } from "../../../actions/gallery";
// Utils
import { connect } from "react-redux";
import { getSkeletons } from "../../../utils";
// Components
import ImgSkeleton from "../../reusable-components/img-skeleton";
import FieldSkeleton from "../../reusable-components/field-skeleton";
import { AppRootState } from "../../../store";
// Types

type InstagramGalleryPropsType = {
  photos: null | string[];
  fetchInstagramPhotos: () => void;
};

const InstagramGallery = ({
  photos,
  fetchInstagramPhotos,
}: InstagramGalleryPropsType) => {
  useEffect(() => {
    fetchInstagramPhotos();
  }, []);

  return (
    <div className="instagramGallery">
      {photos
        ? photos.map((url) => <ImgSkeleton key={url} src={url} title="instagram photo" />)
        : getSkeletons(6, FieldSkeleton, {
            styles: { width: "32%", minHeight: "100px", margin: "2px" },
          })}
    </div>
  );
};

export default connect(
  (state: AppRootState) => ({ photos: state.gallery.instagram }),
  {
    fetchInstagramPhotos,
  }
)(InstagramGallery);
