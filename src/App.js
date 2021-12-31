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
    <div className="max-w-screen-sm mx-auto px-4 text-gray-100 my-8">
      <h1 className="text-center mb-8 text-3xl sm:text-4xl underline">
        The Greatest To-Do List
      </h1>
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
