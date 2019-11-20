import React from 'react';
import './our-story.scss';
// Components
import Section from "../common-components/section";
import SectionTitle from "../common-components/section-title";
import Container from "../common-components/container";
import DefaultText from "../common-components/default-text";
import DefaultButton from "../common-components/default-button";
import SectionSubTitle from "../common-components/section-sub-title";

function OurStory(props) {

    return (
        <Section className="our-story">
            <div className="grey">
                <Container>
                    <div className="left">
                        <SectionTitle>Our Story</SectionTitle>
                        <SectionSubTitle>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </SectionSubTitle>
                        <DefaultText>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A beatae dolorum eos illo quia quibusdam reprehenderit similique voluptate! Atque aut modi odio omnis? Animi assumenda doloremque obcaecati sapiente totam, ut.
                        </DefaultText>
                        <DefaultButton isLink="true" linkPath="/our-story">Cheers</DefaultButton>
                    </div>
                </Container>
                <img src="./img/our-story.png" alt=""/>
            </div>
        </Section>
    );
}

export default OurStory;
