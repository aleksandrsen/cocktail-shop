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
import {Row} from 'antd';
import CocktailItem from "../cocktail-item";

function CocktailsList(props) {
    let {isLoading, isLoaded, cocktails, loadCocktails, params} = props;

    let [cocktailsList, setCocktailsList] = useState([]);

    useEffect(() => {
        if (!isLoading && !isLoaded) {
            loadCocktails();
        }
    });

    if (!isLoading && isLoaded) {

        let filteredCocktails = filterCocktails(cocktails, params);

        function filterCocktails(cocktails, params) {
            if (!params.length) return cocktails;
            let result = [];
            params.forEach(filterItem => {
               let paramName = Object.keys(filterItem)[0];
               let paramValue = filterItem[paramName];
               let res = [];

                if (result.length) {
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
                    })
                } else {
                    cocktails.forEach(cocktail => {
                        if (cocktail[paramName] === paramValue) {
                            res.push(cocktail);
                        }
                    })
                }
                result = res;
            });
            return result;
        }

        let renderCocktails = filteredCocktails.slice(0, 25).map(cocktailItem => {
            return <CocktailItem key={cocktailItem.idDrink} col={8} cocktail={cocktailItem}/>
        });

        return (
            <Row gutter={24} type={"flex"} className="cocktails-list">
                {
                    filteredCocktails.length === 0 ? <h2 className="info-message">We could not find cocktails with this parameters</h2> : renderCocktails
                }
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




// function filterCocktails(cocktails, params) {
//     let result = [];
//     let some;
//     if (!params.strAlcoholic && !params.strCategory && !params.ingredients) {
//         return cocktails
//     } else {
//
//         if (params.strAlcoholic) {
//             some = cocktails.filter(cocktailItem => {
//                 let response;
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
//                 response = params.strAlcoholic.filter(param => {
//                     return param.toLowerCase() === cocktailItem.strAlcoholic.toLowerCase();
//                 });
//                 return response.length;
//             });
//         } else if (params.strCategory) {
//             some = cocktails.filter(cocktailItem => {
//                 let response;
//                 response = params.strAlcoholic.filter(param => {
//                     return param.toLowerCase() === cocktailItem.strAlcoholic.toLowerCase();
//                 });
//                 return response.length;
//             });
//         }
//         console.log(some);
//     }
//     return cocktails;
// }