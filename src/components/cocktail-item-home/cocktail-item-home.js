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

    let cocktailName = cutTextContent(strDrink, 18);

    return (
        <Col span={8}>
            <div className="cocktail-item-home">
                <img src={strDrinkThumb} alt={strDrink}/>
                <div className="description">
                    <div className="title-rate">
                        <div className="title">{cocktailName}</div>
                        <Rate value={4}/>
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
            </div>
        </Col>
    )
}

export default CocktailItemHome;