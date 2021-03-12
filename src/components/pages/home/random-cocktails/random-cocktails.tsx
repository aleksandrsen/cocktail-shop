import React, { useEffect } from "react";
import "./random-cocktails..scss";
// Utils
import { connect } from "react-redux";
import { getSkeletons } from "../../../../utils";
import { useMedia } from "../../../../utils/hooks";
// Actions
import { fetchRandomCocktails } from "../../../../actions/cocktails";
// Components
import Slider, { Settings } from "react-slick";
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
  }, [fetchRandomCocktails]);

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

  const settings: Settings = {
    dots: false,
    lazyLoad: "ondemand",
    infinite: true,
    speed: 1000,
    slidesToShow: columns,
    slidesToScroll: columns,
    initialSlide: 0,
    autoplay: true,
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
          <br />
        </p>
        {cocktails?.length ? (
          <Slider {...settings}>
            {cocktails.map((cocktail) => (
              <CocktailItem
                col={12}
                key={cocktail.id}
                cocktail={cocktail}
                imgSkeletonStyles={{ minHeight: "200px" }}
              />
            ))}
          </Slider>
        ) : (
          <div className="row noWrap">
            {getSkeletons(columns, CocktailItem, {
              col: 12 / columns,
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
