import React, {useEffect} from "react";
import './cocktails-details.scss'
import {connect} from "react-redux";
// Actions
import {addToCart, addToWishList, loadCocktailById} from "../../actions";
// Selectors
import {
    cocktailItemIdSelector,
    cocktailItemLoadedSelector,
    cocktailItemLoadingSelector,
    cocktailItemSelector
} from "../../selectors";
// Components
import Container from "../common-components/container";
import {Col, Row} from "antd";
import Section from "../common-components/section";
import SectionTitle from "../common-components/section-title";
import DefaultButton from "../common-components/default-button";
import Spinner from "../spinner";

function CocktailDetails(props) {
    let {id, addToCart, addToWishList, loaded, loading, cocktail, oldItemId, loadCocktailById} = props;

    useEffect(() => {
        console.log(id, oldItemId);
        if (!loading && !loaded || (id !== oldItemId)) {
            loadCocktailById(id);
        }
    });

    if (!loading && loaded) {
        let {
            idDrink,
            strDrink,
            strCategory,
            strAlcoholic,
            strGlass,
            strInstructions,
            strDrinkThumb,
            ingredientsWithMeasure
        } = cocktail;

        let ingredients = ingredientsWithMeasure.map(item => {
            return item.ingredient + ' ' + '(' + item.measure + ')';
        }).join(', ');

        return (
            <Section className='cocktail-details'>
                <Container>
                    <Row type="flex" gutter={30} justify="space-between">
                        <Col span={10}>
                            <img className='cocktail-img'
                                 src={strDrinkThumb} alt=""/>
                        </Col>
                        <Col span={14}>
                            <SectionTitle>{strDrink} <span
                                className='alc-type'>{`(${strAlcoholic.toLowerCase()})`}</span></SectionTitle>
                            <div className="cocktail-info">
                                <div className="cocktail-info-item">
                                    <span className="title">Category - </span>
                                    <span className="info">{strCategory}</span>
                                </div>
                                <div className="cocktail-info-item">
                                    <span className="title">Glass - </span>
                                    <span className="info">{strGlass}</span>
                                </div>
                                <div className="cocktail-info-item">
                                    <span className="title">Ingredients - </span>
                                    <span className="info">{ingredients}</span>
                                </div>
                            </div>
                            <div className="actions">
                                <div className="price">{+strDrink.length + +idDrink[0]}$</div>
                                <DefaultButton size='large' onClick={() => addToCart(idDrink)}>Add to
                                    card</DefaultButton>
                                <DefaultButton size='large' onClick={() => addToWishList(idDrink)}>Add to wish
                                    list</DefaultButton>
                            </div>

                        </Col>
                    </Row>
                    <Row type="flex" gutter={30} justify="space-between">
                        <Col span={24}>
                            <p className='instructions'>
                                {strInstructions}
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Section>
        )
    }

    return <Spinner/>
}

export default connect(state => ({
    loaded: cocktailItemLoadedSelector(state),
    loading: cocktailItemLoadingSelector(state),
    cocktail: cocktailItemSelector(state),
    oldItemId: cocktailItemIdSelector(state)
}), {addToCart, addToWishList, loadCocktailById})(CocktailDetails);