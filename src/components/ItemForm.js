import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {

  function updateItems(event){
    event.preventDefault()
    const newItem = {
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name: event.target.name.value,
      category: event.target.category.value,
    };
    onItemFormSubmit(newItem)
  }

  return (
    <form onSubmit={updateItems} className="NewItem">
      <label>
        Name:
        <input type="text" name="name" />
      </label>

      <label>
        Category:
        <select name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
