import React, { useEffect } from "react";
import "./instagram-gallery.scss";
// Actions
import { fetchInstagramPhotos } from "../../../actions/gallery";
// Utils
import { connect } from "react-redux";
// Components
import SmallSpinner from "../../spinner";

const InstagramGallery = ({ photos, fetchInstagramPhotos }) => {
  useEffect(() => {
    fetchInstagramPhotos();
  }, []);

  return (
    <div className="instagramGallery">
      {!photos ? (
        <SmallSpinner />
      ) : (
        photos.map((url) => <img src={url} alt="instagram photo" />)
      )}
    </div>
  );
};

export default connect((state) => ({ photos: state.gallery.instagram }), {
  fetchInstagramPhotos,
})(InstagramGallery);
