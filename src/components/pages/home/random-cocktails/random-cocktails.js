import React, { useEffect } from "react";
import "./random-cocktails..scss";
// Utils
import { connect } from "react-redux";
import { getSkeletons } from "../../../../utils";
// Actions
import { fetchRandomCocktails } from "../../../../actions/cocktails";
// Components
import { Carousel } from "antd";
import CocktailItem from "../../cocktails/cocktails-list/cocktail-item";


const RandomCocktails = ({ cocktails, fetchRandomCocktails }) => {
  useEffect(() => {
    fetchRandomCocktails();
  }, []);

  const cutArray = (arr, itemArrLength) => {
    if (!arr || !arr.length) return [];
    const res = [];
    let j = 0;
    for (let i = 0; i < Math.ceil(arr.length / itemArrLength); ) {
      res.push(cocktails.slice(j, j + itemArrLength));
      i += 1;
      j += itemArrLength;
    }
    return res;
  };

  return (
    <div className="randomCocktails default-section">
      <div className="container">
        <div className="section-title">Our cocktails</div>
        <p className="default-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
          architecto at atque corporis, dicta doloremque illum nemo nihil
          nostrum qui ratione reprehenderit. Ex ipsa quibusdam repellat
          repudiandae soluta veritatis voluptates.
        </p>
        {cocktails?.length ? (
          <Carousel autoplay autoplaySpeed={5000} dots={false}>
            {cutArray(cocktails, 4).map((itemArr) => (
              <div
                className="randomCocktails__slideWrapper"
                key={`${itemArr[0].id}${itemArr[1].id}`}
              >
                <div
                  key={`${itemArr[0].id}${itemArr[1].id}`}
                  className="row noWrap"
                >
                  {itemArr.map((cocktail) => (
                    <CocktailItem
                      col={3}
                      key={cocktail.id}
                      cocktail={cocktail}
                      imgSkeletonStyles={{ height: "310px" }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </Carousel>
        ) : (
          <div className="row noWrap">
            {getSkeletons(4, CocktailItem, {
              col: 3,
              imgSkeletonStyles: { height: "310px" },
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default connect(
  (state) => ({ cocktails: state.cocktails.randomCocktails }),
  { fetchRandomCocktails }
)(RandomCocktails);
