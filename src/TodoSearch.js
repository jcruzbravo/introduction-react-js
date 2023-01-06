import React from "react";
import './TodoSearch.css';

function TodoSearch() {

  const onSearchValueChange = (event) => {
    console.log(event.target.value)
  }

  return (
    <div className="Container-TodoSearch">
      <input 
        className="TodoSearch" 
        placeholder="e.g Make the coffe" 
        onChange={onSearchValueChange}
        />
    </div>
  );
}

export { TodoSearch };
