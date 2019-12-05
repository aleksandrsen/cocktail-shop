import React from 'react';
import './about-us-section.scss';
import {Link} from "react-router-dom";
// Components
import newBottle from "../../img/new-bottle.jpg"
import Section from "../common-components/section";
import SectionTitle from "../common-components/section-title";
import Container from "../common-components/container";
import DefaultText from "../common-components/default-text";
import SectionSubTitle from "../common-components/section-sub-title";

function AboutUsSection(props) {

    return (
        <Section className="about-us-section">
            <Container>
                <SectionSubTitle>About us story</SectionSubTitle>
                <SectionTitle>The best of history</SectionTitle>
                <div className="about-us-section-content">
                    <DefaultText>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A beatae dolorum eos illo quia
                        quibusdam
                        reprehenderit similique voluptate! Atque aut modi odio omnis? Animi assumenda doloremque
                        obcaecati
                        sapiente totam, ut. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aspernatur,
                        commodi consectetur cupiditate error esse eum incidunt inventore labore necessitatibus officia
                        pariatur praesentium quaerat rerum sint, tempora unde ut veritatis? Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Adipisci alias autem blanditiis cupiditate, eius ex fugiat impedit
                        iure iusto molestias placeat provident repudiandae rerum sapiente sit tempore tenetur unde vel.
                    </DefaultText>
                    <img src={newBottle} alt="new bottle"/>
                    <DefaultText>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur assumenda at cumque est
                        illo
                        laborum, molestias neque quae quaerat qui quidem ullam voluptate? Aliquid animi eligendi nemo
                        numquam veniam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque autem doloremque
                        eligendi ipsum iste laudantium magni maiores perspiciatis placeat sint.
                    </DefaultText>
                    <Link to={"/cocktails/"} className="default-button">Our menu</Link>
                </div>
            </Container>
        </Section>
    );
}

export default AboutUsSection;