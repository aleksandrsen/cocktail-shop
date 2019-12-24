import React from 'react';
import './cocktail-hover-ingredients.scss';

function CocktailHoverIngredients(props) {
    let {ingredients, err} = props;

    return (
        <div className="cocktail-ingredients">
            {ingredients ? ingredients : err ? err.message : "...loading ingredients"}
        </div>
    );
}

export default CocktailHoverIngredients;