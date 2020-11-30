import React from "react";
import "./cocktail-item.scss";
// Utils
import { cutTextContent } from "../../../../../utils";
// Components
import { Rate } from "antd";
import "tippy.js/dist/tippy.css";
import Tippy from "@tippyjs/react";
import { Link } from "react-router-dom";

const CocktailItem = ({
  cocktail: { id, name, previewSrc, rate, price, ingredients },
}) => (
  <div className="col col-3">
    <Link to={`/cocktails/${id}`} className="cocktailItem">
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
    </Link>
  </div>
);

export default CocktailItem;
