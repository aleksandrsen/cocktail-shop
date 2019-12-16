import React from "react";

function CocktailDetails(props) {
    let {id} = props;


    return (
        <h1 style={{padding: 200}}>Cocktail details - {id}</h1>
    )
}

export default CocktailDetails;