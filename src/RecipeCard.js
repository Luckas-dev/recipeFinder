// import React from "react";
// import { Link } from "react-router-dom";

// function RecipeCard({ recipe }) {
//   return (
//     <div className="recipe-card">
//       <figure><img src={recipe.img} alt={recipe.title +" image"} /> </figure>
//       <article className="cardContent">
//         <h3>{recipe.title}</h3>
//         <p>{recipe.description}</p>
//         <Link to={`/recipe/${recipe.id}`}>View Details</Link>
//       </article>
//     </div>
//   );
// }

// export default RecipeCard;



import React from "react";
import { Link } from "react-router-dom";

function RecipeCard({ recipe, addToBasket }) {
  return (
    <div className="recipe-card">
       <figure><img src={recipe.img} alt={recipe.title +" image"} /> </figure>
      <article>
        <h3>{recipe.title}</h3>
        <p>{recipe.description}</p>
        <Link to={`/recipe/${recipe.id}`}>View Details</Link>
      </article>
      <button onClick={() => addToBasket(recipe)}>
        Add to Basket
      </button>
    </div>
  );
}

export default RecipeCard;

