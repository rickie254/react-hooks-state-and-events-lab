import React,{useState} from "react";
import '../index.css'

function Item({ name, category }) {
  const[isAdded,setIsAdded]=useState(false)
  function handleAdd(){
    setIsAdded((isAdded)=>!isAdded)
  }
  const bgcolor = isAdded? 'rgb(210, 51, 210)':'rgb(237, 237, 32)'
  const color = isAdded?'white':'black'
  const liClass = isAdded?'in-cart':''
  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button style={{background:bgcolor,color:color}} className="add" onClick={handleAdd}>{isAdded?'Remove From Cart':'Add to Cart'}</button>
    </li>
  );
}

export default Item;