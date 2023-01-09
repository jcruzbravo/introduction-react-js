  /* Estructura del useState:
    [
      'valor',
      function setState (va a permitir editar nuestro estado)
    ]
    Hace cambios al estado del componente y le dice a React que lo vuelva a renderizar.
    const [searchValue, setSearchValue] = React.useState('');
  */

import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css';

function TodoSearch() {

  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  }

  return (
    <div className="Container-TodoSearch">
      <input 
        className="TodoSearch" 
        placeholder="Search TO-DO" 
        value={searchValue}
        onChange={onSearchValueChange}
        />
    </div>
  );
}

export { TodoSearch };
