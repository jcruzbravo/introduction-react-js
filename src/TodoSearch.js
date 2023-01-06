import React from "react";
import './TodoSearch.css';

function TodoSearch() {

  const onSearchValueChange = (event) => {
    console.log(event.target.value)
  }

  return (
    <input 
      className="TodoSearch" 
      placeholder="e.g Make the coffe" 
      onChange={onSearchValueChange}
      />
  );
}

export { TodoSearch };
