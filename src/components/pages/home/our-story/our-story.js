import React from "react";
import "./our-story.scss";
import ourStoryImg from "../../../../img/our-story.png";
// Components
import { Link } from "react-router-dom";

const OurStory = (props) => (
  <div className="default-section ourStory">
    <div className="container">
      <div className="row space-between">
        <div className="col col-5">
          <div className="section-title">Our Story</div>
          <h2 className="section-sub-title">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </h2>
          <p className="default-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A beatae
            dolorum eos illo quia quibusdam reprehenderit similique voluptate!
            Atque aut modi odio omnis? Animi assumenda doloremque obcaecati
            sapiente totam, ut. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Adipisci consectetur doloremque ea eligendi
            eveniet molestias mollitia reprehenderit! Accusamus atque, esse hic
            laborum maxime nulla odio possimus quas repudiandae voluptas
            voluptate.
          </p>
          <Link to={"/about"} className="default-button">
            Read more
          </Link>
        </div>
        <div className="col col-5">
          <img src={ourStoryImg} alt="Our story img" />
        </div>
      </div>
    </div>
  </div>
);

export default OurStory;
