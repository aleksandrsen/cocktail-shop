import React, { ChangeEvent, MouseEvent } from "react";
import "./cocktail-item.scss";
// Utils
// Components
import { Rate } from "antd";
import "tippy.js/dist/tippy.css";
import Tippy from "@tippyjs/react";
import { Link } from "react-router-dom";
import ImgSkeleton from "../../../../reusable-components/img-skeleton";
import FieldSkeleton from "../../../../reusable-components/field-skeleton";
import CustomCheckbox from "../../../../reusable-components/custom-checkbox";
// Types
import { CocktailItemType } from "../../../../../types/common";
import { onChangeCustomCheckBoxFuncType } from "../../../../reusable-components/custom-checkbox/custom-checkbox";
import LazyLoad from "react-lazyload";

type CocktailItemPropsType = {
  col: number;
  checked?: boolean;
  isShowCheckBox?: boolean;
  cocktail: null | CocktailItemType;
  imgSkeletonStyles: React.CSSProperties;
  handleCheckbox?: onChangeCustomCheckBoxFuncType;
};

const CocktailItem = ({
  cocktail,
  col = 3,
  handleCheckbox,
  checked = false,
  isShowCheckBox = false,
  imgSkeletonStyles = {},
}: CocktailItemPropsType) => (
  <div className={`col col-${col}`}>
    <div className="cocktailItem">
      {isShowCheckBox && cocktail && !!handleCheckbox && (
        <CustomCheckbox
          value={checked}
          onChange={handleCheckbox}
          data={{ id: cocktail.id }}
        />
      )}
      <Link to={`/cocktails/${cocktail?.id}`} className="cocktailItem__imgWrap">
        <LazyLoad height="310">
          <ImgSkeleton
            src={cocktail?.previewSrc}
            title={cocktail?.name}
            skeletonStyle={{
              width: "100%",
              borderRadius: "10px 10px 0 0",
              ...imgSkeletonStyles,
            }}
          />
        </LazyLoad>
      </Link>
      <div className="cocktailItem__info">
        <Tippy content={cocktail?.name} theme="bootstrap">
          <div className="cocktailItem__title textOverflow">
            {cocktail?.name ? (
              cocktail?.name
            ) : (
              <FieldSkeleton styles={{ padding: "16px 0" }} />
            )}
          </div>
        </Tippy>
        {cocktail?.rate || cocktail?.rate === 0 ? (
          <Rate value={cocktail?.rate} />
        ) : (
          <FieldSkeleton
            styles={{ padding: "16px 0", width: "50%", margin: "auto" }}
          />
        )}

        <div className="cocktailItem__ingredients textOverflow">
          {cocktail?.ingredients ? (
            `${cocktail?.ingredients
              .join("")[0]
              .toUpperCase()}${cocktail?.ingredients.join(", ").slice(1)}`
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
    </div>
  </div>
);

export default React.memo(CocktailItem);
