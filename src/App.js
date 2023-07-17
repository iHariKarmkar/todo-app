import { useState } from "react";
import "./App.css";
import ToDoForm from "./components/ToDoForm/ToDoForm";
import ToDoItemList from "./components/ToDoItemList/ToDoItemList";

function App() {

  // LOGIC TO STORE DATA IN LOCAL STORAGE
  let prevTodo;
  if (
    localStorage.getItem("todo") === null ||
    localStorage.getItem("todo") === undefined
  ) {
    prevTodo = [];
    localStorage.setItem("todo", JSON.stringify(prevTodo));
  } else {
    prevTodo = JSON.parse(localStorage.getItem("todo"));
  }

  const [todo, setTodo] = useState(prevTodo);

  localStorage.setItem("todo", JSON.stringify(todo));


  // ADD NEW TODO
  const saveTodoItem = (todoTitle) => {
    setTodo((prevTodo) => {
      const updatedTodo = [...prevTodo];
      updatedTodo.unshift({
        title: todoTitle,
        id: "T" + Math.floor(Math.random() * 100).toString(),
      });
      return updatedTodo;
    });
  };

  // REMOVE ANY TODO
  const deleteTodo = (todoId) => {
    setTodo((prevTodo) => {
      const updatedTodo = prevTodo.filter((todoItem) => todoItem.id !== todoId);
      return updatedTodo;
    });
  };


  return (
    <div>
      <section className="todo-form container">
        <ToDoForm saveTodoItem={saveTodoItem} />
      </section>
      <section className="todo-list container">
        <ToDoItemList todoData={todo} deleteTodoHandler={deleteTodo} />
      </section>
    </div>
  );
}

export default App;
