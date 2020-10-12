import React, { useEffect } from "react";
import "./random-cocktails..scss";
import { connect } from "react-redux";
// Actions
import { loadRandomCocktails } from "../../../../actions";
// Selectors
import {
  randomCocktailsLoadedSelector,
  randomCocktailsLoadingSelector,
  randomCocktailsSelector,
} from "../../../../selectors";
// Components
import Spinner from "../../../spinner";
import CocktailItem from "../../cocktails/cocktail-item";
import {Carousel} from "antd";

const RandomCocktails = ({
  isLoading,
  isLoaded,
  cocktails,
  loadRandomCocktails,
}) => {
  useEffect(() => {
    if (!isLoading && !isLoaded) {
      loadRandomCocktails();
    }
  });

  if (!isLoading && isLoaded) {
    function cutArray(arr, c) {
      let res = new Array(c);
      for (let i = 0; i < c; ++i) {
        res[i] = [];
      }
      for (let i = 0; i < arr.length; ++i) {
        res[i % c].push(arr[i]);
      }
      return res;
    }

    let cuttedArray = cutArray(cocktails, 4);

    let slides = cuttedArray.map((item, idx) => {
      return (
        <div className="row">
          {item.map((cocktailItem) => {
            return (
              <CocktailItem key={cocktailItem.name} cocktail={cocktailItem} />
            );
          })}
        </div>
      );
    });

    return (
      <div className="cocktails-home-page">
        <div className="container">
          <div className="section-title">Our cocktails</div>
          <p className="default-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
            architecto at atque corporis, dicta doloremque illum nemo nihil
            nostrum qui ratione reprehenderit. Ex ipsa quibusdam repellat
            repudiandae soluta veritatis voluptates.
          </p>
          <Carousel autoplay autoplaySpeed={5000} dots={false}>
            {slides}
          </Carousel>
        </div>
      </div>
    );
  }

  return <Spinner />;
};

export default connect(
  (state) => ({
    isLoading: randomCocktailsLoadingSelector(state),
    isLoaded: randomCocktailsLoadedSelector(state),
    cocktails: randomCocktailsSelector(state),
  }),
  { loadRandomCocktails }
)(RandomCocktails);
