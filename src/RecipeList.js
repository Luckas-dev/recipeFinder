import React from "react";
import { Link } from "react-router-dom";
import RecipeCard from "./RecipeCard";
import Basket from "./Basket";

function RecipeList({ recipes, addToBasket, basket }) {
  console.log(basket)
  return (
    <div className="container">
    <div className="recipeList">
      <h2>All current recipes</h2>
      <Link to="/basket">Go to Basket</Link>
      <div className="Container">
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} addToBasket={addToBasket} />
        ))}
      </div>
    </div>
    </div>
    <div className="recipeBasket">
      <h2>Hier komt de basket jongeuh</h2>
      {basket}
    </div>
    </div>
  );
}

export default RecipeList;
