import React, { useState } from "react";
import "./cocktail-item.scss";
import "tippy.js/dist/tippy.css";
// Utils
import { cutTextContent } from "../../../../utils";
// Actions
// Components
import { Rate } from "antd";
import SmallSpinner from "../../../spinner";
import semanticImg from "../../../../src_/img/semantic.png";
import Tippy from "@tippyjs/react";

const CocktailItem = ({
  col,
  cocktail: { idDrink, strDrink, rate, price, strDrinkThumb, ingredients },
}) => {
  const [isLoad, setIsLoad] = useState({ load: false, error: false });

  return (
    <div className={`col col-${col}`}>
      <div className="cocktailItem">
        <div className="cocktailItem__imgWrap">
          {!isLoad.load ? (
            <SmallSpinner />
          ) : isLoad.error ? (
            <img src={semanticImg} alt="" className="semantic" />
          ) : (
            ""
          )}
          <img
            src={strDrinkThumb}
            alt={strDrink}
            onLoad={(e) => setIsLoad({ ...isLoad, load: true })}
            onError={(e) => setIsLoad({ ...isLoad, error: true })}
          />
        </div>
        <div className="cocktailItem__info">
          <div className="cocktailItem__title">
            <Tippy
              content={strDrink}
              theme="bootstrap"
              disabled={strDrink.length <= 21}
            >
              <span>{cutTextContent(strDrink, 21)}</span>
            </Tippy>
          </div>
          <Rate value={rate} />

          <div className="cocktailItem__ingredients">
            {cutTextContent(
              `${ingredients.join("")[0].toUpperCase()}${ingredients
                .join(", ")
                .slice(1)}`,
              40
            )}
          </div>
          <div className="cocktailItem__price">{price}$</div>
        </div>
      </div>
    </div>
  );
};

export default CocktailItem;
