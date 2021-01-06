import React, { useCallback, useEffect } from "react";
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
  resetCocktailsDetails,
  fetchCocktailsDetails,
  setDislikeCocktailReview,
} from "../../../actions/cocktails";
// Components
import ReviewForm from "../../reusable-components/review-form";
import ImgSkeleton from "../../reusable-components/img-skeleton";
import ReviewsList from "../../reusable-components/reviews-list";
import RippleButton from "../../reusable-components/ripple-button";
import FieldSkeleton from "../../reusable-components/field-skeleton";
// Utils
import { connect } from "react-redux";
// Types
import { match } from "react-router-dom";
import { AppRootState } from "../../../store";
import {
  UserCardType,
  CardItemType,
  CocktailItemType,
  UserWishListType,
  WishListItemType,
  RequestMessageType,
} from "../../../types/common";

type MatchParamsType = {
  id: string;
};

type CocktailsDetailsPropsType = {
  card: UserCardType;
  wishList: UserWishListType;
  match: match<MatchParamsType>;
  resetCocktailsDetails: () => void;
  cocktailDetails: null | CocktailItemType;
  addItemToCard: (data: CardItemType) => void;
  setLikeCocktailReview: (id: number) => void;
  fetchCocktailsDetails: (id: number) => void;
  deleteItemFromWishList: (id: number) => void;
  setDislikeCocktailReview: (id: number) => void;
  addItemToWishList: (data: WishListItemType) => void;
  sendCocktailReview: (id: number, data: RequestMessageType) => void;
};

const CocktailDetails = ({
  card,
  match: {
    params: { id },
  },
  wishList,
  addItemToCard,
  cocktailDetails,
  addItemToWishList,
  sendCocktailReview,
  setLikeCocktailReview,
  fetchCocktailsDetails,
  resetCocktailsDetails,
  deleteItemFromWishList,
  setDislikeCocktailReview,
}: CocktailsDetailsPropsType) => {
  useEffect(() => {
    fetchCocktailsDetails(+id);
    return () => {
      resetCocktailsDetails();
    };
  }, []);

  const handleSubmit = useCallback((data) => sendCocktailReview(+id, data), [
    id,
  ]);

  const handleCard = (e: React.MouseEvent<HTMLButtonElement>): void => {
    if (cocktailDetails) {
      const { id, name: cocktailName, price, previewSrc } = cocktailDetails;
      const { name } = (e.target as HTMLButtonElement).dataset;

      const data = {
        id,
        price,
        previewSrc,
        name: cocktailName,
      };
      if (name === "card") return addItemToCard(data);
      if (wishList[id]) return deleteItemFromWishList(+id);
      addItemToWishList(data);
    }
  };

  return (
    <section className="default-section cocktailDetails">
      <div className="container">
        <div className="row">
          <div className="col col-5">
            <ImgSkeleton
              title={cocktailDetails?.name}
              classes={["cocktailDetails__img"]}
              src={cocktailDetails?.previewSrc}
              skeletonStyle={{
                width: "100%",
                height: "500px",
                borderRadius: "10px",
              }}
            />
          </div>
          <div className="col col-6">
            <h2 className="cocktailDetails__title">
              {cocktailDetails ? (
                <>
                  {cocktailDetails.name}
                  <span className="cocktailDetails__alcoholic">{` (${cocktailDetails.alcoholic.toLowerCase()})`}</span>
                </>
              ) : (
                <FieldSkeleton styles={{ padding: "25px" }} />
              )}
            </h2>
            <div className="cocktailDetails__info">
              <div className="cocktailDetails__infoItem">
                {cocktailDetails ? (
                  <>
                    <span className="detailsTitle">Category - </span>
                    <span className="detailsInfo">
                      {cocktailDetails.category}
                    </span>
                  </>
                ) : (
                  <FieldSkeleton styles={{ padding: "25px" }} />
                )}
              </div>
              <div className="cocktailDetails__infoItem">
                {cocktailDetails ? (
                  <>
                    <span className="detailsTitle">Ingredients - </span>
                    <span className="detailsInfo">
                      {cocktailDetails.ingredients.join(" ")}
                    </span>
                  </>
                ) : (
                  <FieldSkeleton styles={{ padding: "25px" }} />
                )}
              </div>
            </div>
            {cocktailDetails ? (
              <div className="cocktailDetails__actions">
                <div className="price">{cocktailDetails.price}$</div>
                <button
                  className="wishListBtn"
                  onClick={handleCard}
                  data-name="wishList"
                >
                  <svg width="32" height="32">
                    <use
                      xlinkHref={`${
                        wishList[cocktailDetails.id] ? "#heart" : "#wish-list"
                      }`}
                    />
                  </svg>
                </button>
                <RippleButton
                  data-name="card"
                  onClick={handleCard}
                  disabled={!!card[cocktailDetails.id]}
                >
                  {card[cocktailDetails.id] ? "Item in cart" : "Add to cart"}
                </RippleButton>
              </div>
            ) : (
              <FieldSkeleton styles={{ padding: "32px" }} />
            )}
          </div>
        </div>
        <div className="row">
          <div className="col col-5">
            <ReviewForm handleSubmit={handleSubmit} />
            <ReviewsList
              setLike={setLikeCocktailReview}
              reviews={cocktailDetails?.reviews}
              setDislike={setDislikeCocktailReview}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default connect(
  (state: AppRootState) => ({
    card: state.user.card,
    wishList: state.user.wishList,
    cocktailDetails: state.cocktails.cocktailDetails,
  }),
  {
    addItemToCard,
    addItemToWishList,
    sendCocktailReview,
    setLikeCocktailReview,
    resetCocktailsDetails,
    fetchCocktailsDetails,
    deleteItemFromWishList,
    setDislikeCocktailReview,
  }
)(CocktailDetails);
