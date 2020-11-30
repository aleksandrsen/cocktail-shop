import React from "react";
import "./cocktail-item.scss";
// Utils
import { cutTextContent } from "../../../../../utils";
// Components
import { Rate } from "antd";
import "tippy.js/dist/tippy.css";
import Tippy from "@tippyjs/react";

const CocktailItem = ({
  cocktail: { name, previewSrc, rate, price, ingredients },
}) => (
  <div className="col col-3">
    <div className="cocktailItem">
      <div className="cocktailItem__imgWrap">
        <img src={previewSrc} />
      </div>
      <div className="cocktailItem__info">
        <div className="cocktailItem__title">
          <Tippy content={name} theme="bootstrap" disabled={name.length <= 21}>
            <span>{cutTextContent(name, 21)}</span>
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

export default CocktailItem;
