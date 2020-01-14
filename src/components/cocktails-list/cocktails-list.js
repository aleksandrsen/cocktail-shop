import React, {useEffect, useState} from 'react';
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
import {Row, Select} from 'antd';
import CocktailItem from "../cocktail-item";
import DefaultButton from "../common-components/default-button";

function CocktailsList(props) {
    let {isLoading, isLoaded, cocktails, loadCocktails, params, sortBy, searchText} = props;
    const cocktailsOnPage = 27;

    let [pageSize, setPageSize] = useState(cocktailsOnPage);

    useEffect(() => {
        if (!isLoading && !isLoaded) {
            loadCocktails();
        }
    });

    function findMatches(wordToMatch, cocktails) {
        if (wordToMatch === '') return cocktails;
        return cocktails.filter(cocktailItem => {
            const regex = new RegExp(wordToMatch, 'gi');
            return cocktailItem.strDrink.match(regex);
        })
    }

    function filterCocktails(cocktails, params) {
        if (!params.length) return cocktails;
        let result = [];
        params.forEach(filterItem => {
            let paramName = Object.keys(filterItem)[0];
            let paramValue = filterItem[paramName];
            let res = [];

            if (!result.length) {
                res = [];
                cocktails.forEach(cocktail => {
                    if (Array.isArray(cocktail[paramName])) {
                        let arr = cocktail[paramName];
                        arr.forEach(item => {
                            if (item.toLowerCase() === paramValue.toLowerCase()) res.push(cocktail);
                        })
                    } else if (!Array.isArray(cocktail[paramName]) && cocktail[paramName] === paramValue) {
                        res.push(cocktail);
                    }
                });
                result = res;
            } else if (result.length) {
                res = [];
                result.forEach(cocktail => {
                    if (Array.isArray(cocktail[paramName])) {
                        let arr = cocktail[paramName];
                        arr.forEach(item => {
                            if (item.toLowerCase() === paramValue.toLowerCase()) res.push(cocktail);
                        })
                    } else if (!Array.isArray(cocktail[paramName]) && cocktail[paramName] === paramValue) {
                        res.push(cocktail);
                    }
                });
            }
            result = res;
        });
        return result;
    }

    function sort(arr, sortParam) {
        if (!sortParam) return arr;
        let cocktails = [...arr];
        switch (sortParam) {
            case 'strDrink':
                cocktails.sort(({strDrink: a}, {strDrink: b}) => a.toLowerCase() - b.toLowerCase());
                break;
            case 'rate':
                cocktails.sort(({rate: a}, {rate: b}) => b - a);
                break;

            case 'popular':
                cocktails.sort(({rate: a}, {rate: b}) => a - b);
                break;

            case 'price-h-to-l':
                cocktails.sort(({price: a}, {price: b}) => b - a);
                break;

            case 'price-l-to-h':
                cocktails.sort(({price: a}, {price: b}) => a - b);
                break;
            default:
                return cocktails;
        }
        return cocktails;
    }

    if (!isLoading && isLoaded) {
        let filteredCocktails = findMatches(searchText, filterCocktails(sort(cocktails, sortBy), params));
        let renderCocktails = filteredCocktails.slice(0, pageSize).map(cocktailItem => {
            return <CocktailItem key={cocktailItem.idDrink} col={8} cocktail={cocktailItem}/>
        });

        return (
            <>
                <Row gutter={24} type={"flex"} className="cocktails-list">
                    {
                        filteredCocktails.length === 0 ?
                            <h2 className="info-message">We could not find cocktails with this
                                parameters</h2> : renderCocktails
                    }
                </Row>
                {
                    filteredCocktails.length < pageSize ? '' :
                        <div className='show-more-wrapper'>
                            <DefaultButton size='large' onClick={() => setPageSize(pageSize + cocktailsOnPage)}>Show more</DefaultButton>
                        </div>
                }
            </>
        )
    }

    return <Spinner/>
}

export default connect(state => ({
    isLoading: cocktailsLoadingSelector(state),
    isLoaded: cocktailsLoadedSelector(state),
    cocktails: cocktailsSelector(state)
}), {loadCocktails})(CocktailsList);