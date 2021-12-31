import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(userInput);
    setUserInput("");
  };

  return (
    <div className="text-lg">
      <form onSubmit={handleSubmit} className="flex mb-8">
        <input
          value={userInput}
          type="text"
          onChange={handleChange}
          placeholder="Enter task..."
          className="basis-9/12 p-2 rounded-l-md rounded-r-none text-gray-900"
        />
        <button className="basis-3/12 bg-sky-500 hover:bg-sky-600 rounded-r-md">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
