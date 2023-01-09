import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";
import "./App.css";
import { TodoForm } from "../TodoForm";

function AppUI() {
  const { 
    error, 
    loading, 
    searchedTodos, 
    completeTodo, 
    deleteTodo,
    openModal, 
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {error && <p>Error...</p>}
        {loading && <p>Loading...</p>}
        {!loading && !searchedTodos.length && (
          <p>You can create your first TODO</p>
        )}

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

      {!!openModal && (
        <Modal>
          <TodoForm/>
        </Modal>
      )}

      <CreateTodoButton 
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
  );
}

export { AppUI };
