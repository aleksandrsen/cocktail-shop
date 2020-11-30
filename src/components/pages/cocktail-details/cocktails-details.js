import React, { useEffect } from "react";
import "./cocktails-details.scss";
// Actions
import { addToCart, addToWishList } from "../../../actions";
import { fetchCocktailsDetails } from "../../../actions/cocktails";
// Components
import { Col, Row } from "antd";
import LeaveReviews from "../blog-details/review-form";
import SmallSpinner from "../../spinner";
// Utils

import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import RippleButton from "../../reusable-components/Button";

const CocktailDetails = ({ cocktailDetails, fetchCocktailsDetails }) => {
  const { id } = useParams();

  useEffect(() => {
    fetchCocktailsDetails(id);
  }, []);

  const handleSubmit = values => {
    console.log(values)
  }

  return !cocktailDetails ? (
    <SmallSpinner />
  ) : (
    <section className="default-section cocktail-details">
      <div className="container">
        <div className="row">
          <div className="col col-5">
            <img
              className="cocktail-img"
              src={cocktailDetails.previewSrc}
              alt=""
            />
          </div>
          <div className="col col-6">
            <h2 className="section-title">
              {cocktailDetails.name}{" "}
              <span className="alc-type">{`(${cocktailDetails.alcoholic.toLowerCase()})`}</span>
            </h2>
            <div className="cocktail-info">
              <div className="cocktail-info-item">
                <span className="title">Category - </span>
                <span className="info">{cocktailDetails.category}</span>
              </div>
              {/*<div className="cocktail-info-item">*/}
              {/*  <span className="title">Glass - </span>*/}
              {/*  <span className="info">{strGlass}</span>*/}
              {/*</div>*/}
              <div className="cocktail-info-item">
                <span className="title">Ingredients - </span>
                <span className="info">
                  {cocktailDetails.ingredients.join(" ")}
                </span>
              </div>
            </div>
            <div className="actions">
              <div className="price">{cocktailDetails.price}$</div>
              <button
                className="default-button"
                // onClick={() => addToCart(idDrink)}
              >
                Add to card
              </button>
              <button
                className="default-button"
                // onClick={() => addToWishList(idDrink)}
              >
                Add to wish list
              </button>
            </div>
          </div>
        </div>
        <div className="cocktail-instructions">
          <h3>Instructions</h3>
          {/*<p className="instructions">{strInstructions}</p>*/}
        </div>
        <LeaveReviews handleSubmit={handleSubmit} />
      </div>
    </section>
  );
};

export default connect(
  (state) => ({
    cocktailDetails: state.cocktails.cocktailDetails,
  }),
  { addToCart, addToWishList, fetchCocktailsDetails }
)(CocktailDetails);
