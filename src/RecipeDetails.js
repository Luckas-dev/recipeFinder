import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function RecipeDetails({ recipes, addToBasket }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) {
    return <h2>Recipe not found</h2>;
  }

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
      <button onClick={() => navigate("/")} style={{ marginLeft: "10px" }}>
        Back to Homepage
      </button>
    </div>
  );
}

export default RecipeDetails;
