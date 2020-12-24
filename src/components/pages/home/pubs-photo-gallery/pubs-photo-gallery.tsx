import React, { useEffect } from "react";
import "./pubs-photo-gallery.scss";
// Actions
import { fetchGalleryPhotos } from "../../../../actions/gallery";
// Utils
import { connect } from "react-redux";
import { getSkeletons } from "../../../../utils";
// Components
import { AppRootState } from "../../../../store";
import JoinMailingList from "../join-mailing-list";
import ImgSkeleton from "../../../reusable-components/img-skeleton";
import FieldSkeleton from "../../../reusable-components/field-skeleton";

type PubsPhotoGalleryPropsType = {
  galleryPhotos: null | string[];
  fetchGalleryPhotos: () => void;
};

const PubsPhotoGallery = ({
  galleryPhotos,
  fetchGalleryPhotos,
}: PubsPhotoGalleryPropsType) => {
  useEffect(() => {
    fetchGalleryPhotos();
  }, []);

  return (
    <div className="default-section pubGallery">
      <div className="container">
        <h2 className="section-title">Pubs photo gallery</h2>
        <p className="default-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi, aut
          distinctio dolore fugiat itaque nulla, obcaecati omnis perspiciatis
          placeat quas quasi, quia quos sint voluptatem! Aperiam, debitis
          minima. Accusamus
        </p>
      </div>
      <div className="row">
        <div className="col col-6">
          <div className="row">
            {galleryPhotos?.length
              ? galleryPhotos.slice(0, 4).map((src) => (
                  <div className="col col-6" key={src}>
                    <ImgSkeleton
                      src={src}
                      skeletonStyle={{ height: "300px" }}
                    />
                  </div>
                ))
              : getSkeletons(4, FieldSkeleton, {
                  styles: {
                    height: "300px",
                    width: "50%",
                    border: "1px solid #fff",
                    borderRadius: 0,
                    borderStyle: "inset",
                  },
                })}
          </div>
        </div>
        <div className="col col-6">
          {galleryPhotos?.length ? (
            <ImgSkeleton
              src={galleryPhotos[4]}
              skeletonStyle={{ height: "600px" }}
            />
          ) : (
            <FieldSkeleton styles={{ height: "600px", borderRadius: 0 }} />
          )}
        </div>
      </div>
      <JoinMailingList />
    </div>
  );
};

export default connect(
  (state: AppRootState) => ({ galleryPhotos: state.gallery.gallery }),
  {
    fetchGalleryPhotos,
  }
)(React.memo(PubsPhotoGallery));
