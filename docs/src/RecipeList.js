import React from "react";
import RecipeRow from "./RecipeRow";

function RecipeList({recipes, removeRecipe}) {
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th className="name">Name</th>
            <th className="cuisine">Cuisine</th>
            <th className="photo">Photo</th>
            <th className="ingredients">Ingredients</th>
            <th className="preparation">Preparation</th>
            <th className="actions">Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe, index) => (
          <RecipeRow
            removeRecipe={() => removeRecipe(index)}
            key={index}
            recipe={recipe}
          />))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
