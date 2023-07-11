import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import "./ToDoItem.css";

const ToDoItem = (props) => {
  const [checked, setChecked] = useState(false);

  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  const checkboxHandler = () => {
    setChecked((current) => !current);
  };

  // const editHandler = () => {
  //   props.onEdit(props.id);
  // }
  return (
    <li className="todo-item">
      <div className="list-item">
        <input type="checkbox" onChange={checkboxHandler} />
        <p style={checked ? { textDecoration: "line-through" } : {}}>
          {props.title}
        </p>
      </div>
      <div className="list-operation">
        {/* <FaEdit className="icon" onClick={editHandler}/> */}
        <FaTrash className="icon delete-icon" onClick={deleteHandler} />
      </div>
    </li>
  );
};

export default ToDoItem;
