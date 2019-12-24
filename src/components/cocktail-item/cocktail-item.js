import React, {useState} from 'react';
import './cocktail-item.scss';
import cutTextContent from "../../functions/cut-text-content";
import {connect} from "react-redux";
// Actions
import {
    addToCart,
    addToWishList,
    removeFromCart,
    removeFromWishList,
    loadCocktailDetails
} from "../../actions";
// Components
import {Link} from "react-router-dom";
import {Rate, Col} from 'antd';
import CocktailHoverIngredients from "../cocktail-hover-ingredients";

function CocktailItem(props) {
    const {
        idDrink,
        strDrink,
        rate,
        price,
        strDrinkThumb,
        ingredients,
        err
    } = props.cocktail;
    const {
        addToCart,
        addToWishList,
        removeFromCart,
        removeFromWishList,
        col,
        loadCocktailDetails,
        withIngredients
    } = props;

    let [wishList, setWishList] = useState(false);
    let [cart, setCart] = useState(false);

    let title = cutTextContent(strDrink, 23);
    let cocktailIngredients = ingredients || '';

    return (
        <Col span={col ? col : 6}>
            <div className="cocktail-item" onMouseEnter={() => loadCocktailDetails(idDrink)}>
                {/*cocktail-info-start*/}
                <div className="cocktails-info">
                    <img src={strDrinkThumb} alt={strDrink}/>
                    {
                        !withIngredients ? <CocktailHoverIngredients err={err} ingredients={cocktailIngredients} cocktailId={idDrink}/> : ''
                    }
                </div>
                {/*cocktail-info-end*/}

                {/*cocktail-title-rate-start*/}
                <div className="title-rate">
                    <Link to={`/cocktails/${idDrink}`} className="title">{title}</Link>
                    <Rate value={rate}/>
                </div>
                {/*cocktail-title-rate-end*/}

                {/*cocktail-ingredients-start*/}
                {
                    withIngredients ? (
                        <div className="ingredients">
                            {cocktailIngredients}
                        </div>
                    ) : ''
                }
                {/*cocktail-ingredients-end*/}

                {/*cocktail-actions-start*/}
                <div className="actions">
                    <div className="price">{price}$</div>
                    <div className="right-wrapper">
                        <a href="" className="add-to-wish-list" onClick={handleAddToWishList}>
                            {
                                wishList ? <i className="material-icons check">favorite</i> :
                                    <i className="material-icons">favorite_border</i>
                            }
                        </a>
                        <a href="#" className="add-to-cart" onClick={handleAddToCart}>
                            <i className={"material-icons " + `${cart && "check"}`}>shopping_cart</i>
                            {cart && <i className="material-icons done">done</i>}
                        </a>
                    </div>
                </div>
                {/*cocktail-actions-end*/}
            </div>
        </Col>
    );

    function handleAddToCart(e) {
        e.preventDefault();
        if (cart) {
            setCart(false);
            removeFromCart(idDrink);
        } else {
            setCart(true);
            addToCart(idDrink);
        }
    }

    function handleAddToWishList(e) {
        e.preventDefault();
        if (wishList) {
            setWishList(false);
            removeFromWishList(idDrink);
        } else {
            setWishList(true);
            addToWishList(idDrink);
        }
    }
}

export default connect(
    null,
    {
        addToCart,
        addToWishList,
        removeFromCart,
        removeFromWishList,
        loadCocktailDetails
    }
)(CocktailItem);