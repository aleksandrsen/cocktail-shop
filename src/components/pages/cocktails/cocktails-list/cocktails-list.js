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
  fetchCocktailsList,
  cocktails,
  params: { filters, sort, searchValue },
}) => {
  useEffect(() => {
    fetchCocktailsList();
  }, []);

  // CRATE NEW ARRAY FOR FILTERS BY INGREDIENTS ??????????????????????????????????

  const getFilteredCocktails = (cocktails, filters) =>
    cocktails.filter(({ category, alcoholic, ingredients }) => {
      const alc = filters.alcoholic && filters.alcoholic[alcoholic];
      const category_ = filters.category && filters.category[category];
      const ingredients_ =
        filters.ingredients &&
        ingredients.some((item) => filters.ingredients[item.toLowerCase()]);
      return alc || category_ || ingredients_;
    });

  const renderCocktails = (cocktails, filters, sort, searchValue) => {
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

    const filtered = !Object.values(filters).length
      ? searched
      : getFilteredCocktails(cocktails, filters);

    return filtered.map((item) => (
      <CocktailItem key={item.id} cocktail={item} />
    ));
  };

  return (
    <div className="default-section cocktailsList">
      <div className="cocktails-list row">
        {!cocktails ? (
          <SmallSpinner />
        ) : (
          renderCocktails(cocktails.slice(0, 25), filters, sort, searchValue)
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
