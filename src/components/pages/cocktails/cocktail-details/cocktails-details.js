import React, { useEffect } from "react";
import "./cocktails-details.scss";
import { connect } from "react-redux";
// Actions
import {
  addToCart,
  addToWishList,
  loadCocktailById,
} from "../../../../actions";
// Selectors
import {
  cocktailItemIdSelector,
  cocktailItemLoadedSelector,
  cocktailItemLoadingSelector,
  cocktailItemSelector,
} from "../../../../selectors";
// Components
import Container from "../../../layout-components/container";
import { Col, Row } from "antd";
import Section from "../../../layout-components/section";
import SectionTitle from "../../../layout-components/section-title";
import DefaultButton from "../../../layout-components/default-button";
import Spinner from "../../../spinner";
import LeaveReviews from "../../blog/leaave-reviews";
import { Button } from "antd";

const CocktailDetails = ({
  id,
  addToCart,
  addToWishList,
  loaded,
  loading,
  cocktail,
  oldItemId,
  loadCocktailById,
}) => {
  useEffect(() => {
    if ((!loading && !loaded) || id !== oldItemId) {
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
      ingredientsWithMeasure,
    } = cocktail;

    const ButtonGroup = Button.Group;
    let ingredients = ingredientsWithMeasure
      .map((item) => {
        return item.ingredient + " " + "(" + item.measure + ")";
      })
      .join(", ");

    return (
      <Section className="cocktail-details">
        <Container>
          <Row type="flex" gutter={30} justify="space-between">
            <Col span={10}>
              <img className="cocktail-img" src={strDrinkThumb} alt="" />
            </Col>
            <Col span={14}>
              <SectionTitle>
                {strDrink}{" "}
                <span className="alc-type">{`(${strAlcoholic.toLowerCase()})`}</span>
              </SectionTitle>
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
                <DefaultButton onClick={() => addToCart(idDrink)}>
                  Add to card
                </DefaultButton>
                <DefaultButton onClick={() => addToWishList(idDrink)}>
                  Add to wish list
                </DefaultButton>
              </div>
            </Col>
          </Row>
          <Row type="flex" gutter={30} justify="space-between">
            <Col span={24}>
              <div className="cocktail-instructions">
                <h3>Instructions</h3>
                <p className="instructions">{strInstructions}</p>
              </div>
            </Col>
          </Row>
          <Row type="flex" gutter={30} justify="space-between">
            <Col span={24}>
              <LeaveReviews blogPostId={"1111"} />
            </Col>
          </Row>
        </Container>
      </Section>
    );
  }

  return <Spinner />;
};

export default connect(
  (state) => ({
    loaded: cocktailItemLoadedSelector(state),
    loading: cocktailItemLoadingSelector(state),
    cocktail: cocktailItemSelector(state),
    oldItemId: cocktailItemIdSelector(state),
  }),
  { addToCart, addToWishList, loadCocktailById }
)(CocktailDetails);
