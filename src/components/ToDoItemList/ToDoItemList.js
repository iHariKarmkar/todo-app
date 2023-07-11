import React from "react";
import ToDoItem from "../ToDoItem/ToDoItem";
import './ToDoItemList.css';

const ToDoItemList = (props) => {
  return (
    
    <ul>
      {props.todoData.length === 0 && (<p className="fallback-text">Oops! there is no todo item. Maybe add some.</p>)}
      {props.todoData.length > 0 && props.todoData.map((todo) => (
        <ToDoItem
          title={todo.title}
          key={todo.id}
          id={todo.id}
          onDelete={props.deleteTodoHandler}
        />
      ))}
      
    </ul>
  );
};

export default ToDoItemList;
