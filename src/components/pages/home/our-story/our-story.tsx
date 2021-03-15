import React from "react";
import "./our-story.scss";
import ourStory from "../../../../src_/img/our-story.png";
// Components
import LazyLoad from "react-lazyload";
import { Link } from "react-router-dom";
// @ts-ignore
import Fade from "react-reveal/Fade";

const OurStory = () => (
  <div className="default-section ourStory">
    <div className="container">
      <div className="row space-between align-items-center">
        <Fade left>
          <div className="col col-5 col-sm-12">
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
              eveniet molestias mollitia reprehenderit! Accusamus atque, esse
              hic laborum maxime nulla odio possimus quas repudiandae voluptas
              voluptate.
            </p>
            <Link to={"/about"} className="default-button">
              Read more
            </Link>
          </div>
        </Fade>
        <Fade right>
          <div className="col col-5">
            <LazyLoad height="450">
              <img src={ourStory} alt="Our story img" />
            </LazyLoad>
          </div>
        </Fade>
      </div>
    </div>
  </div>
);

export default OurStory;
