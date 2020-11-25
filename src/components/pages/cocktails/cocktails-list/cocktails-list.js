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
import {searchByFields} from "../../../../utils";

const CocktailsList = ({ fetchCocktailsList, cocktails, params: {filters, sort, searchValue} }) => {
  useEffect(() => {
    fetchCocktailsList();
  }, []);


// "id": "12560",
//     "name": "Afterglow",
//     "category": "Cocktail",
//     "alcoholic": "Non alcoholic",
//     "previewSrc": "https://www.thecocktaildb.com/images/media/drink/vuquyv1468876052.jpg",
//     "rate": 2,
//     "price": 15,
//     "ingredients": ["grenadine", "orange juice", "pineapple juice"]

    console.log(filters)

    // alcoholic: ["alcoholic"]
    // category: (2) ["Cocktail", "Cocoa"]
    // ingredients: (2) ["Ale", "Amaretto"]


    const getFilteredCocktails = (cocktails, filters) => {
        return Object.entries(filters).filter(([field, value]) => {




        })
    }


  const renderCocktails = (cocktails, filters, sort, searchValue) => {
      const sorted = !sort ? cocktails : cocktails.sort((a, b) => {
          if (sort ===  "price-h-l") return b.price - a.price;
          if (sort ===  "price-l-h") return a.price - b.price;
          return b[sort] - a[sort];
      });

      const searched = !searchValue ? sorted : searchByFields(cocktails, searchValue, ["name", "price"])

    return searched.map((item) => (
      <CocktailItem key={item.id} cocktail={item} />
    ));
  };

  return (
    <div className="default-section cocktailsList">
      <div className="cocktails-list row">
        {!cocktails ? <SmallSpinner /> : renderCocktails(cocktails.slice(0, 25), filters, sort, searchValue)}
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
