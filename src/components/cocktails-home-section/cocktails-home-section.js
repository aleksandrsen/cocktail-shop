import React, {useEffect} from 'react';
import './cocktails-home-section.scss';
import {connect} from "react-redux";
// Actions
import {loadRandomCocktails} from "../../actions";
// Selectors
import {
    randomCocktailsLoadedSelector,
    randomCocktailsLoadingSelector,
    randomCocktailsSelector
} from "../../selectors";
// Components
import Section from "../common-components/section";
import SectionTitle from "../common-components/section-title";
import Container from "../common-components/container";
import Spinner from "../spinner";
import {Card, Row} from 'antd';
import CocktailItemHome from "../cocktail-item-home";
import DefaultText from "../common-components/default-text";

function CocktailsHomeSection(props) {
    let {isLoading, isLoaded, cocktails, loadRandomCocktails} = props;

    useEffect(() => {
        if (!isLoading && !isLoaded) {
            loadRandomCocktails();
        }
    });

    if (!isLoading && isLoaded) {
        return (
            <Section className="cocktails-home-page">
                <Container>
                    <SectionTitle>Our cocktails</SectionTitle>
                    <DefaultText>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto at atque corporis,
                        dicta doloremque illum nemo nihil nostrum qui ratione reprehenderit. Ex ipsa quibusdam repellat
                        repudiandae soluta veritatis voluptates.
                    </DefaultText>
                    <Row gutter={32}>
                        {
                            cocktails.map(cocktailItem => {
                                return <CocktailItemHome key={cocktailItem.idDrink} cocktail={cocktailItem}/>
                            })
                        }
                    </Row>
                </Container>
            </Section>
        )
    }

    return <Spinner/>
}

export default connect(state => {
    return {
        isLoading: randomCocktailsLoadingSelector(state),
        isLoaded: randomCocktailsLoadedSelector(state),
        cocktails: randomCocktailsSelector(state)
    }
}, {loadRandomCocktails})(CocktailsHomeSection);