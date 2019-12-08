import React from 'react';
import './pub-bartenders-section.scss';
import pubBartenders from "../../normalize-data/pub-bartenders";
import {withRouter} from "react-router-dom";
// Components
import {Row} from 'antd';
import BartenderItem from "../bartender-item";
import Section from "../common-components/section";
import SectionTitle from "../common-components/section-title";
import Container from "../common-components/container";
import DefaultText from "../common-components/default-text";
import SectionSubTitle from "../common-components/section-sub-title";

function PubBartendersSection(props) {
    let {history} = props;

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
                            return <BartenderItem
                                key={bartender.id}
                                bartender={bartender}
                                bartenderDetails={() => {
                                        let {name, surname} = bartender;
                                        let bartenderRoute = (name + "-" + surname).toLowerCase();
                                        history.push(bartenderRoute)
                                    }
                                }
                            />
                        })
                    }
                </Row>
            </Container>
        </Section>
    );
}

export default withRouter(PubBartendersSection);
