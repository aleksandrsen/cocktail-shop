import React, {useEffect} from 'react';
import './cocktails-list.scss';
import {connect} from "react-redux";
// Actions
import {loadCocktails} from "../../actions";
// Selectors
import {
    cocktailsLoadingSelector,
    cocktailsLoadedSelector,
    cocktailsSelector
} from "../../selectors";
// Components
import Spinner from "../spinner";
import {Row} from 'antd';
import CocktailItemHome from "../cocktail-item";

function CocktailsList(props) {
    let {isLoading, isLoaded, cocktails, loadCocktails} = props;

    useEffect(() => {
        if (!isLoading && !isLoaded) {
            loadCocktails();
        }
    });

    if (!isLoading && isLoaded) {

        return (
            <Row gutter={24} type={"flex"} className="cocktails-list">
                {cocktails.slice(0, 25).map(cocktailItem => {
                    return <CocktailItemHome key={cocktailItem.idDrink} col={8} cocktail={cocktailItem}/>
                })}
            </Row>

        )
    }

    return <Spinner/>
}

export default connect(state => {
    return {
        isLoading: cocktailsLoadingSelector(state),
        isLoaded: cocktailsLoadedSelector(state),
        cocktails: cocktailsSelector(state)
    }
}, {loadCocktails})(CocktailsList);