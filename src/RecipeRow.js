import React from "react";
import "./RecipeRow.css";
function RecipeRow({recipe, removeRecipe}, key){
  const {name, cuisine, photo, ingredients, preparation} = recipe;
  return(
    <tr key={key}>
      <td className="name">{name}</td>
      <td className="cuisine">{cuisine}</td>
      <td className="photo">
        <img src={photo} alt="food from recipe" />
      </td>
      <td className="ingredients"><p>{ingredients}</p></td>
      <td className="preparation" style={{maxHeight:"50px", overflow:"scroll"}}><p>{preparation}</p></td>
      <td className="actions">
        <button name="delete" onClick={removeRecipe}>Delete</button>
      </td>
    </tr>
  );
}
export default RecipeRow;