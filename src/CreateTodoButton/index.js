import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton (props) {

  const onClickButton = (msg) => {
    alert(msg);
  }

  return (
    <button 
      className="CreateTodoButton"
      onClick={() => onClickButton('Here the modal should be displayed.')}
      >
        +
    </button>
  );
}

export { CreateTodoButton };