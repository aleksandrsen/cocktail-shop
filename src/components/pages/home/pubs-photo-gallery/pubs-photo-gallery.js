import React from "react";
import "./pubs-photo-gallery.scss";
import photo1 from "../../../../src_/img/pubs-photo-gallery/photo-gallery-img-1.jpg";
import photo2 from "../../../../src_/img/pubs-photo-gallery/photo-gallery-img-2.jpg";
import photo3 from "../../../../src_/img/pubs-photo-gallery/photo-gallery-img-3.jpg";
import photo4 from "../../../../src_/img/pubs-photo-gallery/photo-gallery-img-4.jpg";
import photo5 from "../../../../src_/img/pubs-photo-gallery/photo-gallery-img-5.jpg";

// Components
import JoinMailingList from "../join-mailing-list";

const PubsPhotoGallery = (props) => (
  <div className="default-section pubGallery">
    <div className="container">
      <h2 className="section-title">Pubs photo gallery</h2>
      <p className="default-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi, aut
        distinctio dolore fugiat itaque nulla, obcaecati omnis perspiciatis
        placeat quas quasi, quia quos sint voluptatem! Aperiam, debitis minima.
        Accusamus
      </p>
    </div>
    <div className="row">
      <div className="col col-6">
        <div className="row">
          <div className="col col-6">
            <img src={photo1} alt="photo-gallery-img" />
          </div>
          <div className="col col-6">
            <img src={photo2} alt="photo-gallery-img" />
          </div>
          <div className="col col-6">
            <img src={photo3} alt="photo-gallery-img" />
          </div>
          <div className="col col-6">
            <img src={photo4} alt="photo-gallery-img" />
          </div>
        </div>
      </div>
      <div className="col col-6">
        <img src={photo5} alt="photo-gallery-img" />
      </div>
    </div>
    <JoinMailingList />
  </div>
);

export default PubsPhotoGallery;
