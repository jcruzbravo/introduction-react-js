  /* Estructura del useState:
    [
      'valor',
      function setState (va a permitir editar nuestro estado)
    ]
    Hace cambios al estado del componente y le dice a React que lo vuelva a renderizar.
    const [searchValue, setSearchValue] = React.useState('');
  */

import React from "react";
import './TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue }) {

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  }

  return (
    <div className="Container-TodoSearch">
      <input 
        className="TodoSearch" 
        placeholder="e.g Make the coffe" 
        value={searchValue}
        onChange={onSearchValueChange}
        />
    </div>
  );
}

export { TodoSearch };
