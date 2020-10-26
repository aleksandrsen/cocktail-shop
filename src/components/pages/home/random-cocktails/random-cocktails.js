import React, { useEffect } from "react";
import "./random-cocktails..scss";
import { connect } from "react-redux";
// Actions
import { fetchRandomCocktails } from "../../../../actions/cocktails";
// Components
import Spinner from "../../../spinner";
import CocktailItem from "../../cocktails/cocktail-item";
import { Carousel } from "antd";
import SmallSpinner from "../../../spinner";

const RandomCocktails = ({ cocktails, fetchRandomCocktails }) => {
  useEffect(() => {
    fetchRandomCocktails();
  }, []);

  const cutArray = (arr, itemArrLength) => {
    if (!arr || !arr.length) return [];
    let res = [];
    let j = 0;
    for (let i = 0; i < Math.ceil(arr.length / itemArrLength); ) {
      res.push(cocktails.slice(j, j + itemArrLength));
      i += 1;
      j += itemArrLength;
    }
    return res;
  };

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
        {cocktails && cocktails.length ? (
          <Carousel autoplay autoplaySpeed={5000} dots={false}>
            {cutArray(cocktails, 4).map((itemArr) => (
              <div key={itemArr[0].idDrink} className="row">
                {itemArr.map((cocktail) => (
                  <CocktailItem key={cocktail.idDrink} cocktail={cocktail} />
                ))}
              </div>
            ))}
          </Carousel>
        ) : (
          <SmallSpinner />
        )}
      </div>
    </div>
  );
};

// return <Spinner />

export default connect(
  (state) => ({ cocktails: state.cocktails.randomCocktails }),
  { fetchRandomCocktails }
)(RandomCocktails);
