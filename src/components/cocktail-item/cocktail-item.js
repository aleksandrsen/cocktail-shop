import React, {useState} from 'react';
import './cocktail-item.scss';
import cutTextContent from "../../functions/cut-text-content";
import {connect} from "react-redux";
import semanticImg from "../../img/semantic.png";
// Actions
import {
    addToCart,
    addToWishList,
    removeFromCart,
    removeFromWishList
} from "../../actions";
// Components
import {NavLink} from "react-router-dom";
import {Rate, Col} from 'antd';

function CocktailItem(props) {
    const {
        idDrink,
        strDrink,
        rate,
        price,
        strDrinkThumb,
        ingredients,
    } = props.cocktail;
    const {
        addToCart,
        addToWishList,
        removeFromCart,
        removeFromWishList,
        col
    } = props;

    let [wishList, setWishList] = useState(false);
    let [cart, setCart] = useState(false);
    let [loadImg, setLoad] = useState(false);

    let title = cutTextContent(strDrink, 23);
    let cocktailIngredients = ingredients.join(', ')[0].toUpperCase() + ingredients.join(', ').slice(1);

    return (
        <Col span={col ? col : 6}>
            <div className="cocktail-item">
                {/*cocktail-info-start*/}
                <div className="cocktails-info">
                    {loadImg ? "" : <img src={semanticImg} alt={strDrink}/>}
                    <img src={strDrinkThumb} alt={strDrink} onLoad={(e) => setLoad(true)}/>
                </div>
                {/*cocktail-info-end*/}

                {/*cocktail-title-rate-start*/}
                <div className="title-rate">
                    <NavLink to={`${idDrink}`} className="title">{title}</NavLink>
                    <Rate value={rate}/>
                </div>
                {/*cocktail-title-rate-end*/}

                <div className="ingredients">
                    {cocktailIngredients}
                </div>

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
        removeFromWishList
    }
)(CocktailItem);