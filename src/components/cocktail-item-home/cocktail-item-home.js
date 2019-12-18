import React, {useState} from 'react';
import './cocktail-item-home.scss';
import cutTextContent from "../../functions/cut-text-content";
import {connect} from "react-redux";
// Actions
import {
    addToCart,
    addToWishList,
    removeFromCart,
    removeFromWishList
} from "../../actions";
// Components
import {Link} from "react-router-dom";
import {Rate, Col} from 'antd';


function CocktailItemHome(props) {
    let {
        idDrink,
        strAlcoholic,
        strDrink,
        rate,
        price,
        strDrinkThumb,
        strInstructions,
    } = props.cocktail;
    const {addToCart, addToWishList, removeFromCart, removeFromWishList, col} = props;

    let [wishList, setWishList] = useState(false);
    let [cart, setCart] = useState(false);

    let cocktail = props.cocktail;
    let title = cutTextContent(strDrink, 23);
    let ingredients = getCocktailIngredients(cocktail) || '';
    // let ingredients = '';
    return (
        <Col span={col ? col : 6}>
            <div className="cocktail-item-home">
                <img src={strDrinkThumb} alt={strDrink}/>
                <div className="title-rate">
                    <Link to={`/cocktails/${idDrink}`} className="title">{title}</Link>
                    <Rate value={rate < 0 ? 1 : rate > 5 ? 5 : rate}/>
                </div>
                <div className="ingredients">
                    {ingredients}
                </div>
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

    function getCocktailIngredients(obj) {
        let ingredients = [];
        if (!obj.strIngredient1) return null;
        for (let key in obj) {
            if (key.slice(0, -1) === "strIngredient" && obj[key] !== null) {
                ingredients.push(obj[key]);
            }
        }
        let res = ingredients.join(', ').toLowerCase();
        return res[0].toUpperCase() + res.slice(1);
    }
}

export default connect(
    null,
    {
        addToCart,
        addToWishList,
        removeFromCart,
        removeFromWishList
    }
)(CocktailItemHome);