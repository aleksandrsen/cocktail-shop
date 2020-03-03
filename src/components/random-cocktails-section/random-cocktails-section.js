import React, {useEffect} from 'react';
import './random-cocktails-section.scss';
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
import {Carousel, Row} from 'antd';
import CocktailItem from "../cocktail-item";
import DefaultText from "../common-components/default-text";

function RandomCocktailsSection(props) {
    let {isLoading, isLoaded, cocktails, loadRandomCocktails} = props;

    useEffect(() => {
        if (!isLoading && !isLoaded) {
            loadRandomCocktails();
        }
    });

    if (!isLoading && isLoaded) {

        function cutArray(arr, c) {
            let res = new Array(c);
            for (let i = 0; i < c; ++i) {
                res[i] = [];
            }
            for (let i = 0; i < arr.length; ++i) {
                res[i % c].push(arr[i]);
            }
            return res;
        }

        let cuttedArray = cutArray(cocktails, 4);

        let slides = cuttedArray.map(item => {
            return (
                <Row key={item[1].strDrink} gutter={24} type={"flex"}>
                    {item.map(cocktailItem => {
                        return <CocktailItem key={cocktailItem.idDrink} cocktail={cocktailItem}/>
                    })}
                </Row>
            )
        });

        return (
            <Section className="cocktails-home-page">
                <Container>
                    <SectionTitle>Our cocktails</SectionTitle>
                    <DefaultText>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto at atque corporis,
                        dicta doloremque illum nemo nihil nostrum qui ratione reprehenderit. Ex ipsa quibusdam repellat
                        repudiandae soluta veritatis voluptates.
                    </DefaultText>
                    <Carousel autoplay autoplaySpeed={5000} dots={false}>
                        {slides}
                    </Carousel>
                </Container>
            </Section>
        )
    }

    return <Spinner/>
}

export default connect(state => ({
    isLoading: randomCocktailsLoadingSelector(state),
    isLoaded: randomCocktailsLoadedSelector(state),
    cocktails: randomCocktailsSelector(state)
}), {loadRandomCocktails})(RandomCocktailsSection);