import React, { ReactHTMLElement, useEffect } from "react";
import "./cocktails-list.scss";
// Actions
import { fetchCocktailsList } from "../../../../actions/cocktails";
// Components
import CocktailItem from "./cocktail-item";
import RippleButton from "../../../reusable-components/ripple-button";
// Utils
import { connect } from "react-redux";
import { searchByFields, getSkeletons } from "../../../../utils";
// Types
import { AllFilters } from "../cocktails";
import { AppRootState } from "../../../../store";
import { CocktailItemType } from "../../../../types/common";
import { SortParamsValuesTypes } from "../cocktails-select/cocktails-select";

type CocktailsListPropsType = {
  cocktails: null | CocktailItemType[];
  fetchCocktailsList: () => void;
  params: {
    filters: AllFilters;
    sort: SortParamsValuesTypes;
    searchValue: string;
  };
};

const CocktailsList = ({
  cocktails,
  fetchCocktailsList,
  params: { filters, sort, searchValue },
}: CocktailsListPropsType) => {
  useEffect(() => {
    fetchCocktailsList();
  }, []);

  const checkIsFiltersEmpty = (filters: AllFilters): boolean => {
    const alcoholic =
      filters.alcoholic && Object.values(filters.alcoholic).length;
    const category = filters.category && Object.values(filters.category).length;
    const ingredients =
      filters.ingredients && Object.values(filters.ingredients).length;
    return !!alcoholic || !!category || !!ingredients;
  };

  const getFilteredCocktails = (
    cocktails: CocktailItemType[],
    filters: AllFilters
  ): CocktailItemType[] => {
    const alcoholic_ =
      filters.alcoholic && Object.values(filters.alcoholic).length
        ? cocktails.filter(
            ({ alcoholic }) => filters.alcoholic[alcoholic.toLowerCase()]
          )
        : cocktails;

    const category_ =
      filters.category && Object.values(filters.category).length
        ? alcoholic_.filter(
            ({ category }) => filters.category[category.toLowerCase()]
          )
        : alcoholic_;

    return filters.ingredients && Object.values(filters.ingredients).length
      ? category_.filter(({ ingredients }) =>
          ingredients.some((item) => filters.ingredients[item.toLowerCase()])
        )
      : category_;
  };

  const renderCocktails = (
    cocktails: CocktailItemType[],
    filters: AllFilters,
    sort: SortParamsValuesTypes,
    searchValue: string
  ) => {
    const sorted = !sort
      ? cocktails
      : cocktails.sort((a, b) => {
          if (sort === "price-h-l") return b.price - a.price;
          if (sort === "price-l-h") return a.price - b.price;
          if (sort === "rate") return b.rate - a.rate;
          return a[sort] > b[sort] ? 1 : -1;
        });

    const searched = !searchValue
      ? sorted
      : searchByFields(cocktails, searchValue, ["name", "price"]);

    const filtered = !checkIsFiltersEmpty(filters)
      ? searched
      : getFilteredCocktails(cocktails, filters);

    return filtered.length ? (
      filtered.map((item) => (
        <CocktailItem
          col={3}
          key={item.id}
          cocktail={item}
          imgSkeletonStyles={{ height: "220px" }}
        />
      ))
    ) : (
      <div className="cocktailsList__empty">No cocktails with this params</div>
    );
  };

  return (
    <div className="default-section cocktailsList">
      <div className="row">
        {!cocktails
          ? getSkeletons(16, CocktailItem, {
              col: 3,
              imgSkeletonStyles: { height: "220px" },
            })
          : renderCocktails(cocktails.slice(0, 35), filters, sort, searchValue)}
      </div>
      <RippleButton>Load more</RippleButton>
    </div>
  );
};

export default connect(
  (state: AppRootState) => ({
    cocktails: state.cocktails.list,
  }),
  { fetchCocktailsList }
)(CocktailsList);
