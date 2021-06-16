import React, { useRef, memo } from "react";
import styles from "./our-story.module.scss";
// Components
import LazyLoad from "react-lazyload";
import { Link } from "react-router-dom";
// @ts-ignore
import Fade from "react-reveal/Fade";
// Utils
import ourStoryPreview from "../../../../src_/img/our-story.png";
import { useIsShowAnimation } from "../../../../utils/hooks";

const OurStory = () => {
  const sectionRef = useRef(null);
  const isShowAnimation = useIsShowAnimation(sectionRef, "name");

  console.log(isShowAnimation);

  return (
    <div ref={sectionRef} className={`default-section ${styles.ourStory}`}>
      <div className={`container ${styles.ourStoryContainer}`}>
        <div className="row space-between align-items-center">
          <Fade left={isShowAnimation}>
            <div className="col col-5 col-sm-12">
              <div className="section-title">Our Story</div>
              <h2 className="section-sub-title">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </h2>
              <p className="default-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                beatae dolorum eos illo quia quibusdam reprehenderit similique
                voluptate! Atque aut modi odio omnis? Animi assumenda doloremque
                obcaecati sapiente totam, ut. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Adipisci consectetur doloremque ea
                eligendi eveniet molestias mollitia reprehenderit! Accusamus
                atque, esse hic laborum maxime nulla odio possimus quas
                repudiandae voluptas voluptate.
              </p>
              <Link to={"/about"} className="default-button">
                Read more
              </Link>
            </div>
          </Fade>
          <Fade right={isShowAnimation}>
            <div className={`col col-5 ${styles.ourStoryImgWrapper}`}>
              <LazyLoad height="450">
                <img
                  className={styles.ourStoryImg}
                  src={ourStoryPreview}
                  alt="Our story img"
                />
              </LazyLoad>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default memo(OurStory);
