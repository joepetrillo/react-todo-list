import { StrictMode, useState } from "react";
import ReactDOM from "react-dom";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  const [todoItems, setTodoItems] = useState([]);

  const deleteTodo = (id) => {
    setTodoItems(todoItems.filter((todo) => todo.id !== id));
  };

  const addTodo = (userInput) => {
    if (userInput === "") return;
    setTodoItems([{ id: Date.now(), task: userInput }, ...todoItems]);
  };

  return (
    <div>
      <h1>The Greatest To-Do List Ever</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todoItems={todoItems} deleteTodo={deleteTodo} />
    </div>
  );
};

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
