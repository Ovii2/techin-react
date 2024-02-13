import Todo from "./Todo";
import todos from "../dev-data/todos";

function TodoList() {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </div>
  );
}

export default TodoList;
