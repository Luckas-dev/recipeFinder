import React from "react";
import { Link } from "react-router-dom";
import RecipeCard from "./RecipeCard";

function RecipeList({ addToBasket }) {
  const recipes = [
    {
      id: 1,
      title: "Pasta",
      description: "A simple pasta recipe",
      ingredients: [
        { name: "Pasta", quantity: 200, unit: "g" },
        { name: "Tomato Sauce", quantity: 100, unit: "ml" },
        { name: "Cheese", quantity: 50, unit: "g" },
      ],
    },
    {
      id: 2,
      title: "Tacos",
      description: "Delicious tacos with beef",
      ingredients: [
        { name: "Tortillas", quantity: 4, unit: "pcs" },
        { name: "Beef", quantity: 300, unit: "g" },
        { name: "Lettuce", quantity: 50, unit: "g" },
      ],
    },
  ];

  return (
    <div>
      <h2>Recipe List</h2>
      <Link to="/basket">Go to Basket</Link>
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe}>
            <button onClick={() => addToBasket(recipe)}>Add to Basket</button>
          </RecipeCard>
        ))}
      </div>
    </div>
  );
}

export default RecipeList;
