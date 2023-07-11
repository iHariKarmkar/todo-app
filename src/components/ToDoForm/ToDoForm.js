import React, {useState} from "react";
import "./ToDoForm.css";
import Button from "../UI/Button";

const ToDoForm = (props) => {
  const [enteredTodo, setEnteredTodo] = useState('');
  const onChangeHandler = (event) => {
    setEnteredTodo(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.saveTodoItem(enteredTodo);
    setEnteredTodo('');
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="form-control">
        <label htmlFor="todo">ToDo</label>
        <input
          type="text"
          placeholder="Write your todo"
          onChange={onChangeHandler}
          value={enteredTodo}
          required
        />
      </div>
      <div className="form-action">
        <Button type="submit">Add</Button>
      </div>
    </form>
  );
};

export default ToDoForm;
