import React from "react";
import "./cocktail-item.scss";
// Utils
import { cutTextContent } from "../../../../../utils";
// Components
import { Rate } from "antd";
import "tippy.js/dist/tippy.css";
import Tippy from "@tippyjs/react";
import { Link } from "react-router-dom";
import ImgSkeleton from "../../../../reusable-components/img-skeleton";
import FieldSkeleton from "../../../../reusable-components/field-skeleton";

const CocktailItem = ({ cocktail }) => (
  <div className="col col-3">
    <Link to={`/cocktails/${cocktail?.id}`} className="cocktailItem">
      <div className="cocktailItem__imgWrap">
        <ImgSkeleton
          src={cocktail?.previewSrc}
          title={cocktail?.name}
          skeletonStyle={{
            width: "100%",
            height: "310px",
            borderRadius: "10px 10px 0 0",
          }}
        />
      </div>
      <div className="cocktailItem__info">
        <div className="cocktailItem__title">
          {cocktail?.name ? (
            <Tippy
              content={cocktail?.name}
              theme="bootstrap"
              disabled={cocktail?.name.length <= 21}
            >
              <span>{cocktail?.name && cutTextContent(cocktail.name, 21)}</span>
            </Tippy>
          ) : (
            <FieldSkeleton styles={{ padding: "16px 0" }} />
          )}
        </div>
        {cocktail?.rate ? (
          <Rate value={cocktail?.rate} />
        ) : (
          <FieldSkeleton
            styles={{ padding: "16px 0", width: "50%", margin: "auto" }}
          />
        )}

        <div className="cocktailItem__ingredients">
          {cocktail?.ingredients ? (
            cutTextContent(
              `${cocktail?.ingredients
                .join("")[0]
                .toUpperCase()}${cocktail?.ingredients.join(", ").slice(1)}`,
              40
            )
          ) : (
            <FieldSkeleton
              styles={{ padding: "20px 0", width: "90%", margin: "auto" }}
            />
          )}
        </div>
        <div className="cocktailItem__price">
          {cocktail?.price ? (
            cocktail?.price
          ) : (
            <FieldSkeleton
              styles={{
                padding: "16px 20px",
                display: "inline-block",
                marginRight: "7px",
              }}
            />
          )}
          $
        </div>
      </div>
    </Link>
  </div>
);

export default CocktailItem;
