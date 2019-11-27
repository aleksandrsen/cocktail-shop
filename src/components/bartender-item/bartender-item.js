import React from 'react';
import './pub-bartenders-section.scss';
import {Link} from "react-router-dom";
import pubBartenders from "../../data/pub-bartenders";
// Components
import {Row, Col} from 'antd';
import Section from "../common-components/section";
import SectionTitle from "../common-components/section-title";
import Container from "../common-components/container";
import DefaultText from "../common-components/default-text";
import SectionSubTitle from "../common-components/section-sub-title";
import SocialNetworks from "../social-networks";

function PubBartendersSection(props) {

    return (
        <Section className="pub-bartenders-section">
            <Container>
                <SectionSubTitle>Our team</SectionSubTitle>
                <SectionTitle>Pub bartenders</SectionTitle>
                <DefaultText>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At deleniti dolores eaque et expedita
                    harum hic illo iste modi necessitatibus nostrum nulla porro quae quidem repellat soluta tempora,
                    veniam veritatis!
                </DefaultText>
                <Row gutter={32}>
                    {
                        pubBartenders.map(bartender => {
                            let {name, surname, img, id} = bartender;
                            let bartenderRoute = (name + "-" + surname).toLowerCase();

                            return (
                                <Col key={id} span={8}>
                                    <Link to={`/bartenders/${bartenderRoute}`}>
                                        <div className="bartender-item">
                                            <img src={img} alt=""/>
                                            <span className="name">{name} {surname}</span>
                                        </div>
                                    </Link>
                                </Col>
                            )
                        })
                    }
                </Row>
                <SocialNetworks/>
            </Container>
        </Section>
    );
}

export default PubBartendersSection;
