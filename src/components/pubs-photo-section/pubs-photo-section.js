import React from 'react';
import './pubs-photo-section.scss';
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
                    <img src="./img/photo-gallery-img-1.jpg" alt=""/>
                    <img src="./img/photo-gallery-img-2.jpg" alt=""/>
                    <img src="./img/photo-gallery-img-3.jpg" alt=""/>
                    <img src="./img/photo-gallery-img-4.jpg" alt=""/>
                </div>
                <div className="right">
                    <img src="./img/photo-gallery-img-5.jpg" alt=""/>
                </div>
            </div>
            <JoinMailingList/>
        </Section>
    );
}

export default PubsPhotoSection;
