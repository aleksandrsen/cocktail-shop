import React, {useEffect} from 'react';
import './bartener-details.scss';
import {connect} from "react-redux";
// Actions
import {loadBartenderById, loadBartenders} from "../../actions";
// Selectors
import {
    bartenderSelector,
    bartendersLoadedSelector,
    bartendersLoadingSelector
} from "../../selectors";
// Components
import Section from "../common-components/section";
import SectionTitle from "../common-components/section-title";
import Container from "../common-components/container";
import DefaultText from "../common-components/default-text";
import SectionSubTitle from "../common-components/section-sub-title";
import DefaultButton from "../common-components/default-button";
import TalkToBartenderSection from "../talk-to-bartender-section";
import Spinner from "../spinner";

function BartenderDetails(props) {
    let {isLoading, isLoaded, bartender, loadBartenderById, id} = props;

    useEffect(() => {
        if (!isLoading && !isLoaded) {
            loadBartenderById(id);
        }
    });

    if (!isLoading && isLoaded && bartender) {
        let {name, surname, img} = bartender;

        return (
            <>
                <Section className="bartender-details">
                    <Container>
                        <SectionSubTitle>Bartender</SectionSubTitle>
                        <SectionTitle>{name + " " + surname}</SectionTitle>
                        <DefaultText>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At deleniti dolores eaque et
                            expedita
                            harum hic illo iste modi necessitatibus nostrum nulla porro quae quidem repellat soluta
                            tempora,
                            veniam veritatis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cumque
                            debitis
                            eligendi expedita modi, nemo quia ratione. Corporis, deleniti error ex maiores nam nesciunt
                            perspiciatis quaerat tempora tempore velit, voluptatem.
                        </DefaultText>
                        <img className="bartender-photo" src={img} alt={name + surname}/>
                        <DefaultText>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At deleniti dolores eaque et
                            expedita
                            harum hic illo iste modi necessitatibus nostrum nulla porro quae quidem repellat soluta
                            tempora,
                            veniam veritatis!
                        </DefaultText>
                        <DefaultButton>Awards</DefaultButton>
                    </Container>
                </Section>
                <TalkToBartenderSection bartender={bartender}/>
            </>
        );
    }

    return <Spinner/>;
}

export default connect((state, ownProps) => {
    return {
        isLoading: bartendersLoadingSelector(state),
        isLoaded: bartendersLoadedSelector,
        bartender: bartenderSelector(state, ownProps)
    }
}, {loadBartenderById})(BartenderDetails);
