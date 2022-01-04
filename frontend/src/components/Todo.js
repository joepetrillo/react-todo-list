import { TiDeleteOutline } from "react-icons/ti";

const Todo = ({ todo, deleteTodo }) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h3 className="text-lg break-all">{todo.task}</h3>
      <button onClick={() => deleteTodo(todo.id)} className="pl-6">
        <TiDeleteOutline size="2rem" />
      </button>
    </div>
  );
};

export default Todo;
