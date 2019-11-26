import React from 'react';
import './pubs-photo-section.scss';
import photo1 from "./img/photo-gallery-img-1.jpg"
import photo2 from "./img/photo-gallery-img-2.jpg"
import photo3 from "./img/photo-gallery-img-3.jpg"
import photo4 from "./img/photo-gallery-img-4.jpg"
import photo5 from "./img/photo-gallery-img-5.jpg"
// Components
import Section from "../common-components/section";
import SectionTitle from "../common-components/section-title";
import Container from "../common-components/container";
import DefaultText from "../common-components/default-text";
import JoinMailingList from "../join-mailing-list";

function PubsPhotoSection(props) {

    return (
        <Section className="pubs-photo-section">
            <Container>
                <SectionTitle>Pubs photo gallery</SectionTitle>
                <DefaultText>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi, aut distinctio dolore fugiat itaque nulla, obcaecati omnis perspiciatis placeat quas quasi, quia quos sint voluptatem! Aperiam, debitis minima. Accusamus?
                </DefaultText>
            </Container>
            <div className="photo-gallery">
                <div className="left">
                    <img src={photo1} alt=""/>
                    <img src={photo2} alt=""/>
                    <img src={photo3} alt=""/>
                    <img src={photo4} alt=""/>
                </div>
                <div className="right">
                    <img src={photo5} alt=""/>
                </div>
            </div>
            <JoinMailingList/>
        </Section>
    );
}

export default PubsPhotoSection;
