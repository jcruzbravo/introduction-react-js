import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import "./App.css";

function AppUI (){
  return (
    <React.Fragment>
      <TodoCounter/>
      <TodoSearch/>
      
      <TodoContext.Consumer>
        {({
          error,
          loading, 
          searchedTodos, 
          completeTodo, 
          deleteTodo
        }) => (
          <TodoList>
          {error && <p>Error...</p>}
          {loading && <p>Loading...</p>}
          {(!loading && !searchedTodos.length) && <p>You can create your first TODO</p>}
  
          {searchedTodos.map((todo) => (
            <TodoItem 
              key={todo.text} 
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
              />
          ))}
          </TodoList> 
        )}
      </TodoContext.Consumer>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export { AppUI };