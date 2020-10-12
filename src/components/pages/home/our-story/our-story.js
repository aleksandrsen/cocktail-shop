import React from "react";
import "./our-story.scss";
import ourStoryImg from "../../../../img/our-story.png";
// Components
import { Link } from "react-router-dom";

const OurStory = (props) => (
  <div className="default-section our-story">
    <div className="grey">
      <div className="container">
        <div className="row">
          <div className="col col-6">
            <div className="section-title">Our Story</div>
            <h2 className="section-sub-title">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </h2>
            <p className="default-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A beatae
              dolorum eos illo quia quibusdam reprehenderit similique voluptate!
              Atque aut modi odio omnis? Animi assumenda doloremque obcaecati
              sapiente totam, ut.
            </p>
            <Link to={"/about"} className="default-button">
              Read more
            </Link>
          </div>
          <div className="col col-6">
            <img src={ourStoryImg} alt="out story img" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default OurStory;
