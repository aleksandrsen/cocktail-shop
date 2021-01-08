import React, { useEffect } from "react";
import "./random-cocktails..scss";
// Utils
import { connect } from "react-redux";
import { getSkeletons } from "../../../../utils";
import { useMedia } from "../../../../utils/hooks";
// Actions
import { fetchRandomCocktails } from "../../../../actions/cocktails";
// Components
import { Carousel } from "antd";
import CocktailItem from "../../cocktails/cocktails-list/cocktail-item";
// Types
import { AppRootState } from "../../../../store";
import { CocktailItemType } from "../../../../types/common";

type RandomCocktailsPropsType = {
  cocktails: null | CocktailItemType[];
  fetchRandomCocktails: () => void;
};

const RandomCocktails = ({
  cocktails,
  fetchRandomCocktails,
}: RandomCocktailsPropsType) => {
  useEffect(() => {
    fetchRandomCocktails();
  }, []);

  const columns = useMedia(
    [
      "(min-width: 1200px)",
      "(min-width: 992px)",
      "(min-width: 767px)",
      "(min-width: 576px)",
      "(min-width: 200px)",
    ],
    [4, 3, 2, 1, 1],
    4
  );

  const cutArray = (cocktails: CocktailItemType[], itemArrLength: number) => {
    if (!cocktails || !cocktails.length) return [];
    const res = [];
    let j = 0;
    for (let i = 0; i < Math.ceil(cocktails.length / itemArrLength); ) {
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
          <br/>
        </p>
        {cocktails?.length ? (
          <Carousel autoplay autoplaySpeed={5000} dots={false}>
            {cutArray(cocktails, columns).map((itemArr) => (
              <div
                className="randomCocktails__slideWrapper"
                key={`${itemArr[0]?.id}${itemArr[1]?.id}`}
              >
                <div
                  key={`${itemArr[0]?.id}${itemArr[1]?.id}`}
                  className="row noWrap"
                >
                  {itemArr.map((cocktail) => (
                    <CocktailItem
                      col={12 / columns}
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
            {getSkeletons(columns, CocktailItem, {
              col: 12/columns,
              imgSkeletonStyles: { height: "310px" },
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default connect(
  (state: AppRootState) => ({ cocktails: state.cocktails.randomCocktails }),
  { fetchRandomCocktails }
)(React.memo(RandomCocktails));
