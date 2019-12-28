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
import CocktailItem from "../cocktail-item";

function CocktailsList(props) {
    let {isLoading, isLoaded, cocktails, loadCocktails, params} = props;

    useEffect(() => {
        if (!isLoading && !isLoaded) {
            loadCocktails();
        }
    });

    if (!isLoading && isLoaded) {
        let filteredCocktails = filterCocktails(cocktails, params);

        function filterCocktails(cocktails, params) {
            if (!params.alcoholic && !params.categories && !params.ingredients) {
                return cocktails
            }
            console.log(params);
            return cocktails;
        }

        return (
            <Row gutter={24} type={"flex"} className="cocktails-list">
                {filteredCocktails.slice(0, 25).map(cocktailItem => {
                    return <CocktailItem key={cocktailItem.idDrink} col={8} cocktail={cocktailItem}/>
                })}
            </Row>
        )
    }

    return <Spinner/>
}

export default connect(state => ({
    isLoading: cocktailsLoadingSelector(state),
    isLoaded: cocktailsLoadedSelector(state),
    cocktails: cocktailsSelector(state)
}), {loadCocktails})(CocktailsList);