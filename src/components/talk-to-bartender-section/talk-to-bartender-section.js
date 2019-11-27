import React from 'react';
import './bartener-details.scss';
import pubBartenders from "../../data/pub-bartenders";
// Components
import {Row, Col} from 'antd';
import Section from "../common-components/section";
import SectionTitle from "../common-components/section-title";
import Container from "../common-components/container";
import DefaultText from "../common-components/default-text";
import SocialNetworks from "../social-networks";
import SectionSubTitle from "../common-components/section-sub-title";
import DefaultButton from "../common-components/default-button";

function BartenderDetails(props) {

    let {bartenderId} = props;
    let bartender = pubBartenders.find(({name, surname}) => {
        return (name + '-' + surname).toLowerCase() === bartenderId;
    });
    let {name, surname, img, email, id} = bartender;

    return (
        <>
            <Section className="bartender-details">
                <Container>
                    <SectionSubTitle>Bartender</SectionSubTitle>
                    <SectionTitle>{name + " " + surname}</SectionTitle>
                    <DefaultText>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At deleniti dolores eaque et expedita
                        harum hic illo iste modi necessitatibus nostrum nulla porro quae quidem repellat soluta tempora,
                        veniam veritatis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cumque debitis
                        eligendi expedita modi, nemo quia ratione. Corporis, deleniti error ex maiores nam nesciunt
                        perspiciatis quaerat tempora tempore velit, voluptatem.
                    </DefaultText>
                    <img className="bartender-photo" src={img} alt={name + surname}/>
                    <DefaultText>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At deleniti dolores eaque et expedita
                        harum hic illo iste modi necessitatibus nostrum nulla porro quae quidem repellat soluta tempora,
                        veniam veritatis!
                    </DefaultText>
                    <DefaultButton>Awards</DefaultButton>
                </Container>
            </Section>
            <Section className="talk-to-bartender">
                <Container>
                    <SectionTitle>Talk to {name + " " + surname}</SectionTitle>

                    <DefaultButton>Submit</DefaultButton>
                </Container>
            </Section>
        </>
    );
}

export default BartenderDetails;
