import React, { useEffect } from "react";
import "./random-cocktails..scss";
// Utils
import { connect } from "react-redux";
// Actions
import { fetchRandomCocktails } from "../../../../actions/cocktails";
// Components
import { Carousel } from "antd";
import SmallSpinner from "../../../spinner";
import CocktailItem from "../../cocktails/cocktails-list/cocktail-item";

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
    <div className="cocktailsHome default-section">
      <div className="container">
        <div className="section-title">Our cocktails</div>
        <p className="default-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
          architecto at atque corporis, dicta doloremque illum nemo nihil
          nostrum qui ratione reprehenderit. Ex ipsa quibusdam repellat
          repudiandae soluta veritatis voluptates.
        </p>
        {cocktails && cocktails.length ? (
          <Carousel autoplay autoplaySpeed={50000000} dots={false}>
            {cutArray(cocktails, 4).map((itemArr) => (
              <div className="slideWrapper">
                <div key={itemArr[0].idDrink} className="row noWrap">
                  {itemArr.map((cocktail) => (
                    <CocktailItem key={cocktail.idDrink} cocktail={cocktail} col={3} />
                  ))}
                </div>
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

export default connect(
  (state) => ({ cocktails: state.cocktails.randomCocktails }),
  { fetchRandomCocktails }
)(RandomCocktails);
