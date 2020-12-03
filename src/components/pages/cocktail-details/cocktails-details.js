import React, { useEffect } from "react";
import "./cocktails-details.scss";
// Actions
import {
  addItemToCard,
  addItemToWishList,
  deleteItemFromWishList,
} from "../../../actions/user";
import {
  sendCocktailReview,
  setLikeCocktailReview,
  fetchCocktailsDetails,
  setDislikeCocktailReview,
} from "../../../actions/cocktails";
// Components
import SmallSpinner from "../../spinner";
import ReviewForm from "../../reusable-components/review-form";
import ReviewsList from "../../reusable-components/reviews-list";
import RippleButton from "../../reusable-components/ripple-button";
// Utils
import { connect } from "react-redux";
import { Icons } from "../../../src_/icons";
import { useParams } from "react-router-dom";

const CocktailDetails = ({
  card,
  wishList,
  addItemToCard,
  cocktailDetails,
  addItemToWishList,
  sendCocktailReview,
  setLikeCocktailReview,
  fetchCocktailsDetails,
  deleteItemFromWishList,
  setDislikeCocktailReview,
}) => {
  const { id } = useParams();

  useEffect(() => {
    fetchCocktailsDetails(id);
  }, []);

  const handleSubmit = (data) => sendCocktailReview(id, data);

  const handleCard = ({ target: { dataset } }) => {
    const { id, name, price, previewSrc } = cocktailDetails;

    const data = {
      id,
      name,
      price,
      previewSrc,
    };
    if (dataset.name === "card") return addItemToCard(data);

    if (wishList[id]) return deleteItemFromWishList(id);

    addItemToWishList(data);
  };

  return !cocktailDetails ? (
    <SmallSpinner />
  ) : (
    <section className="default-section cocktailDetails">
      <div className="container">
        <div className="row">
          <div className="col col-5">
            <img
              className="cocktailDetails__img"
              src={cocktailDetails.previewSrc}
              alt={cocktailDetails.name}
            />
          </div>
          <div className="col col-6">
            <h2 className="cocktailDetails__title">
              {cocktailDetails.name}{" "}
              <span className="cocktailDetails__alcoholic">{`(${cocktailDetails.alcoholic.toLowerCase()})`}</span>
            </h2>
            <div className="cocktailDetails__info">
              <div className="cocktailDetails__item">
                <span className="detailsTitle">Category - </span>
                <span className="detailsInfo">{cocktailDetails.category}</span>
              </div>
              <div className="cocktailDetails__item">
                <span className="detailsTitle">Ingredients - </span>
                <span className="detailsInfo">
                  {cocktailDetails.ingredients.join(" ")}
                </span>
              </div>
            </div>
            <div className="cocktailDetails__actions">
              <div className="price">{cocktailDetails.price}$</div>
              <button
                className="wishListBtn"
                onClick={handleCard}
                data-name="wishList"
              >
                {wishList[cocktailDetails.id] ? Icons.heart : Icons.wishList}
              </button>
              <RippleButton
                onClick={handleCard}
                data-name="card"
                disabled={card[cocktailDetails.id]}
              >
                {card[cocktailDetails.id] ? "Item in cart" : "Add to cart"}
              </RippleButton>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-5">
            <ReviewForm handleSubmit={handleSubmit} />
            <ReviewsList
              setLike={setLikeCocktailReview}
              reviews={cocktailDetails.reviews}
              setDislike={setDislikeCocktailReview}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default connect(
  (state) => ({
    card: state.user.card,
    wishList: state.user.wishList,
    cocktailDetails: state.cocktails.cocktailDetails,
  }),
  {
    addItemToCard,
    addItemToWishList,
    sendCocktailReview,
    setLikeCocktailReview,
    fetchCocktailsDetails,
    deleteItemFromWishList,
    setDislikeCocktailReview,
  }
)(CocktailDetails);
