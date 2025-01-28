import React from "react";

function Basket({ basket }) {
  // Aggregate ingredients from all recipes
  const ingredientTotals = basket.reduce((totals, recipe) => {
    recipe.ingredients.forEach(({ name, quantity, unit }) => {
      if (!totals[name]) {
        totals[name] = { quantity: 0, unit };
      }
      totals[name].quantity += quantity;
    });
    return totals;
  }, {});

  return (
    <div>
      <h2>Your Basket</h2>
      {Object.entries(ingredientTotals).length === 0 ? (
        <p>No recipes added to the basket.</p>
      ) : (
        <ul>
          {Object.entries(ingredientTotals).map(([name, { quantity, unit }]) => (
            <li key={name}>
              {name}: {quantity} {unit}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Basket;
