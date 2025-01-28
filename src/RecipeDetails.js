import React from "react";
import { useParams } from "react-router-dom";

function RecipeDetails({ addToBasket }) {
  const { id } = useParams();

  const recipe = {
    id: 1,
    title: "Pasta",
    description: "A simple pasta recipe",
    ingredients: [
      { name: "Pasta", quantity: 200, unit: "g" },
      { name: "Tomato Sauce", quantity: 100, unit: "ml" },
      { name: "Cheese", quantity: 50, unit: "g" },
    ],
    steps: ["Boil pasta", "Add sauce", "Serve with cheese"],
  };

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>
            {ingredient.name}: {ingredient.quantity} {ingredient.unit}
          </li>
        ))}
      </ul>
      <button onClick={() => addToBasket(recipe)}>Add to Basket</button>
    </div>
  );
}

export default RecipeDetails;
