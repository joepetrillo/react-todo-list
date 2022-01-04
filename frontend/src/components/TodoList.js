import Todo from "./Todo";

const TodoList = ({ todoItems, deleteTodo }) => {
  return (
    <div>
      {todoItems.map((todo) => {
        return <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} />;
      })}
    </div>
  );
};

export default TodoList;
