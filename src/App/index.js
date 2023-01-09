// useEffect, se va a ejecutar despues de renderizar.
// si le pasamos un array vacio (o parametro) solo se ejecuta una vez

import React from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from "../TodoContext";


function App() {
  
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
