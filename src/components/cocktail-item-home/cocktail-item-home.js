import React from 'react';
import './cocktail-item-home.scss';
import cutTextContent from "../../functions/cut-text-content";
// Components
import DefaultText from "../common-components/default-text";
import {Rate, Col} from 'antd';

function CocktailItemHome(props) {
    let {
        idDrink,
        strAlcoholic,
        strDrink,
        strDrinkThumb,
        strInstructions
    } = props.cocktail;
    let cocktail = props.cocktail;
    let title = cutTextContent(strDrink, 23);

    let ingredients = getCocktailIngredients(cocktail);
    let rate = Math.floor(strDrink.length / 4);


    return (
        <Col span={6}>
            <div className="cocktail-item-home">
                <img src={strDrinkThumb} alt={strDrink}/>
                <div className="title-rate">
                    <div className="title">{title}</div>
                    <Rate value={rate < 0 ? 1 : rate > 5 ? 5 : rate}/>
                </div>
                <div className="ingredients">
                    {ingredients}
                </div>
                <div className="actions">
                    <div className="price">{idDrink[0] + idDrink[2]}$</div>
                    <div className="right-wrapper">
                        <a href="#" className="add-to-cart">
                            <i className="material-icons">favorite_border</i>
                        </a>
                        <a href="#" className="add-to-wishlist">
                            <i className="material-icons">shopping_cart</i>
                        </a>
                    </div>
                </div>
            </div>
        </Col>
    );

    function getCocktailIngredients(obj) {
        let ingredients = [];
        for (let key in cocktail) {
            if (key.slice(0, -1) === "strIngredient" && cocktail[key] !== null) {
                ingredients.push(cocktail[key]);
            }
        }
        let res = ingredients.join(', ').toLowerCase();
        return res[0].toUpperCase() + res.slice(1);
    }
}

export default CocktailItemHome;