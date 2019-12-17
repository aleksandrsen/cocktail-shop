import React, {useEffect} from 'react';
import './cocktails-list.scss';
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
import Spinner from "../spinner";
import {Row} from 'antd';
import CocktailItemHome from "../cocktail-item-home";
import Section from "../common-components/section";

function CocktailsList(props) {
    let {isLoading, isLoaded, cocktails, loadRandomCocktails} = props;

    useEffect(() => {
        if (!isLoading && !isLoaded) {
            loadRandomCocktails();
        }
    });

    if (!isLoading && isLoaded) {

        return (
            <Row gutter={24} type={"flex"} className="cocktails-list">
                {cocktails.map(cocktailItem => {
                    return <CocktailItemHome key={cocktailItem.idDrink} col={8} cocktail={cocktailItem}/>
                })}
            </Row>

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
}, {loadRandomCocktails})(CocktailsList);