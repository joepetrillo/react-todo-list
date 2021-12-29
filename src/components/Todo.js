const Todo = ({ todo, deleteTodo }) => {
  return (
    <div className="todo">
      <h3>{todo.task}</h3>
      <button onClick={() => deleteTodo(todo.id)}>DELETE</button>
    </div>
  );
};

export default Todo;
