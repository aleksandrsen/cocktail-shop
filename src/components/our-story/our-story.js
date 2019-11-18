import React from 'react';
import './our-story.scss';

function OurStory(props) {

    return (
        <div className="default-section our-story">
            {/*<div className="container">*/}
                <div className="grey">
                    <div className="container">
                    <div className="left">
                        <h2 className="section-title">
                            Our Story
                        </h2>
                        <h3 className="section-sub-title">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi culpa debitis
                        </h3>
                        <div className="default-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium assumenda
                            commodi cum, dolores dolorum eaque enim exercitationem id impedit ipsam nesciunt qui
                            quisquam reiciendis sunt tenetur, totam. Ea, expedita. Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Adipisci amet commodi cum delectus ea eius fuga ipsa molestiae
                            nemo neque, nobis pariatur provident quas sed, similique tempora voluptatem voluptatibus.
                            Placeat?
                        </div>
                    </div>
                    </div>
                    <img src="./img/our-story.png" alt=""/>
                {/*</div>*/}
            </div>
        </div>
    );
}

export default OurStory;
