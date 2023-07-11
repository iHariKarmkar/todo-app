import { useState } from "react";
import "./App.css";
import ToDoForm from "./components/ToDoForm/ToDoForm";
import ToDoItemList from "./components/ToDoItemList/ToDoItemList";

const INITIAL_LIST = [{ title: "Do Homework", id: "T1" }];

function App() {
  const [todo, setTodo] = useState(INITIAL_LIST);
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
