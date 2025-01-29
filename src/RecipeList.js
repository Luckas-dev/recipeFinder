import React from "react";
import { Link } from "react-router-dom";
import RecipeCard from "./RecipeCard";

function RecipeList({ recipes, addToBasket }) {
  return (
    <div>
      <h2>Recipe List</h2>
      <Link to="/basket">Go to Basket</Link>
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} addToBasket={addToBasket} />
        ))}
      </div>
    </div>
  );
}

export default RecipeList;
