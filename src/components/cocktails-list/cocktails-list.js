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
            let result = [];
            let some;
            if (!params.strAlcoholic && !params.strCategory && !params.ingredients) {
                return cocktails
            } else {

                if (params.strAlcoholic) {
                    some = cocktails.filter(cocktailItem => {
                        let response;
                        // for (let paramName in params) {
                        //     if (!params[paramName] || !params[paramName].length) return;
                        //
                        //     let cocktailParam = cocktailItem[paramName];
                        //
                        //     response = params[paramName].filter(param => {
                        //         // console.log(param.toLowerCase() === cocktailParam.toLowerCase());
                        //         return param.toLowerCase() === cocktailParam.toLowerCase();
                        //     });
                        //     // console.log(response);
                        // }
                        response = params.strAlcoholic.filter(param => {
                            return param.toLowerCase() === cocktailItem.strAlcoholic.toLowerCase();
                        });
                        return response.length;
                    });
                } else if (params.strCategory) {
                    some = cocktails.filter(cocktailItem => {
                        let response;
                        response = params.strAlcoholic.filter(param => {
                            return param.toLowerCase() === cocktailItem.strAlcoholic.toLowerCase();
                        });
                        return response.length;
                    });
                }
                console.log(some);
            }
            return cocktails;
        }

        // idDrink: "12560"
        // strDrink: "Afterglow"
        // strCategory: "Cocktail"
        // strAlcoholic: "Non alcoholic"
        // strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/vuquyv1468876052.jpg"
        // rate: 2
        // price: 15
        // ingredients: (3) ["grenadine", "orange juice", "pineapple juice"]

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