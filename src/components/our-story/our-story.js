import React from 'react';
import './our-story.scss';

function OurStory(props) {

    return (
        <div className="default-section our-story">
            <div className="container">
                <div className="grey">
                    <div className="left">
                        <div className="section-title">
                            Our Story
                        </div>
                        <div className="section-sub-title">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi culpa debitis
                        </div>
                        <div className="default-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium assumenda
                            commodi cum, dolores dolorum eaque enim exercitationem id impedit ipsam nesciunt qui
                            quisquam reiciendis sunt tenetur, totam. Ea, expedita. Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Adipisci amet commodi cum delectus ea eius fuga ipsa molestiae
                            nemo neque, nobis pariatur provident quas sed, similique tempora voluptatem voluptatibus.
                            Placeat?
                        </div>
                    </div>
                    <img src="./img/our-story.png" alt=""/>
                </div>
            </div>
        </div>
    );
}

export default OurStory;
