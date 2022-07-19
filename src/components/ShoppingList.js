import React from "react";
import Item from "./Item";
import { useState } from "react";

function ShoppingList({ items }) {
  const [isSelected,setIsSelected]=useState('All')
  function handleSelected(e){
    setIsSelected(e.target.value)
  }
  const itemsToDisplay = items.filter((item)=>{
    if(isSelected === 'All'){
      return true
    }else{
      return item.category === isSelected
    }
  })
  return (
    <div className="ShoppingList" onChange={handleSelected}>
      <div className="Filter">
        <select name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;