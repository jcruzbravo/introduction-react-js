import React from "react";
import './TodoList.css';

function TodoList (props){
  return (
    <section>
      <div className="TodoList-container">
        <ul>
          {props.children}
        </ul>
      </div>
    </section>
  )
}

export {TodoList};