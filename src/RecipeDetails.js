import React from "react";
import { useParams } from "react-router-dom";

function RecipeDetails({ addToBasket }) {
  const { id } = useParams();

  const recipes = [
    {
      id: 1,
      title: "Pasta",
      img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      img: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?q=80&w=2094&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Delicious tacos with beef",
      ingredients: [
        { name: "Tortillas", quantity: 4, unit: "pcs" },
        { name: "Beef", quantity: 300, unit: "g" },
        { name: "Lettuce", quantity: 50, unit: "g" },
      ],
    },
    {
      id: 3,
      title: "Chilie con carne",
      img: "https://images.unsplash.com/photo-1591386767153-987783380885?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Delicious tacos with beef",
      ingredients: [
        { name: "Tortillas", quantity: 4, unit: "pcs" },
        { name: "Beef", quantity: 300, unit: "g" },
        { name: "Lettuce", quantity: 50, unit: "g" },
      ],
    },
    {
      id: 4,
      title: "Pasta roomsaus",
      img: "https://images.unsplash.com/photo-1633337474564-1d9478ca4e2e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Delicious tacos with beef",
      ingredients: [
        { name: "Tortillas", quantity: 4, unit: "pcs" },
        { name: "Beef", quantity: 300, unit: "g" },
        { name: "Lettuce", quantity: 50, unit: "g" },
      ],
    },
    {
      id: 5,
    title: "Brcoli aardapelpuree met een vleezeke",
    img: "https://images.unsplash.com/photo-1508313880080-c4bef0730395?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Delicious tacos with beef",
    ingredients: [
      { name: "Tortillas", quantity: 4, unit: "pcs" },
      { name: "Beef", quantity: 300, unit: "g" },
      { name: "Lettuce", quantity: 50, unit: "g" },
    ],
  },
  {
    id: 6,
    title: "Curry",
    img: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
