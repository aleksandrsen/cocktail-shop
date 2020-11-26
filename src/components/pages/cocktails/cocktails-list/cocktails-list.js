import React, { useEffect } from "react";
import "./cocktails-list.scss";
// Actions
import { fetchCocktailsList } from "../../../../actions/cocktails";
// Components
import CocktailItem from "../cocktail-item";
import SmallSpinner from "../../../spinner";
import RippleButton from "../../../reusable-components/Button";
// Utils
import { connect } from "react-redux";
import { searchByFields } from "../../../../utils";

const CocktailsList = ({
  cocktails,
  fetchCocktailsList,
  params: { filters, sort, searchValue },
}) => {
  useEffect(() => {
    fetchCocktailsList();
  }, []);

  // CRATE NEW ARRAY FOR FILTERS BY INGREDIENTS ??????????????????????????????????

  const checkIsFiltersEmpty = (filters) => {
    const alcoholic =
      filters.alcoholic && Object.values(filters.alcoholic).length;
    const category = filters.category && Object.values(filters.category).length;
    const ingredients =
      filters.ingredients && Object.values(filters.ingredients).length;
    return alcoholic || category || ingredients;
  };

  const getFilteredCocktails = (cocktails, filters) => {
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

  const renderCocktails = (cocktails, filters, sort, searchValue) => {

      const arr = cocktails.reduce((obj, item) => {
          obj[item.category] = {
              label: item.category,
              value: item.category
          }
          return obj;

      }, {})

      console.log(arr);
      const sortedd = Object.values(arr).sort((a, b) => a.label < b.label)

      console.log(sortedd)


    const sorted = !sort
      ? cocktails
      : cocktails.sort((a, b) => {
          if (sort === "price-h-l") return b.price - a.price;
          if (sort === "price-l-h") return a.price - b.price;
          return b[sort] - a[sort];
        });

    const searched = !searchValue
      ? sorted
      : searchByFields(cocktails, searchValue, ["name", "price"]);

    const filtered = !checkIsFiltersEmpty(filters)
      ? searched
      : getFilteredCocktails(cocktails, filters);

    return filtered.length ? (
      filtered.map((item) => <CocktailItem key={item.id} cocktail={item} />)
    ) : (
      <div>No cocktails with this params</div>
    );
  };

  return (
    <div className="default-section cocktailsList">
      <div className="cocktails-list row">
        {!cocktails ? (
          <SmallSpinner />
        ) : (
          renderCocktails(cocktails, filters, sort, searchValue)
        )}
      </div>
      <RippleButton>Load more</RippleButton>
    </div>
  );
};

export default connect(
  (state) => ({
    cocktails: state.cocktails.list,
  }),
  { fetchCocktailsList }
)(CocktailsList);
