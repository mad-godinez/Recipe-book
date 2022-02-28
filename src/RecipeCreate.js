import React, { useState } from "react";

function RecipeCreate({addRecipe}) {
  // When the form is submitted, a new recipe is created & form contents are cleared. 
  const initial = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };
  const [formData, setFormData] = useState({...initial});
  const changer = ({target}) => {
    setFormData({...formData, [target.name] : target.value});
  };
  
  const submitter = (event) => {
    event.preventDefault();
    addRecipe(formData);
    setFormData({...initial});
  };
  return (
    <form className="create" name="create" onSubmit={submitter} autoComplete="off">
      <table>
        <tbody>
          <tr style={{backgroundColor:"#D9AF65"}}>
            <td style={{width:"10%"}}>
              <input type="text" name="name" id="name" placeholder="Name" style={{width:"100%"}}
                     value={formData.name} onChange={changer} required/>
            </td>
            <td style={{width:"10%"}}>
              <input type="text" name="cuisine" id="cuisine" placeholder="Cuisine" style={{width:"100%"}}
                     value={formData.cuisine} onChange={changer} required />
            </td>
            <td style={{width:"10%"}}>
              <input type="text" name="photo" id="photo" placeholder="Photo" style={{width:"100%"}}
                     value={formData.photo} onChange={changer} required/>
            </td>
            <td style={{width:"23%"}}>
              <textarea name="ingredients" id="ingredients" placeholder="Ingredients" size="3"
                        style={{width:"100%"}}
                        value={formData.ingredients} onChange={changer} required></textarea>
            </td>
            <td style={{width:"23%"}}>
              <textarea name="preparation" id="preparation" placeholder="Preparation" size="3"
                        style={{width:"100%"}}
                        value={formData.preparation} onChange={changer} required></textarea>
            </td>
            <td>
              <button className="btn btn-primary" type="submit" style={{width:"fit-content"}}>Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
