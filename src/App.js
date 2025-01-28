import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeList from "./RecipeList";
import RecipeForm from "./RecipeForm";
import RecipeDetails from "./RecipeDetails";
import Basket from "./Basket";

function App() {
  const [basket, setBasket] = useState([]);

  const addToBasket = (recipe) => {
    setBasket((prev) => [...prev, recipe]);
  };

  return (
    <Router>
      <div className="App">
        <header>
          <h1>Recipe Finder</h1>
        </header>
        <Routes>
          <Route path="/" element={<RecipeList addToBasket={addToBasket} />} />
          <Route path="/add-recipe" element={<RecipeForm />} />
          <Route path="/recipe/:id" element={<RecipeDetails addToBasket={addToBasket} />} />
          <Route path="/basket" element={<Basket basket={basket} />} />
        </Routes>
      </div>
      
    </Router>
  );
}

export default App;
