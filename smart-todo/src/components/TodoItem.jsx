import "./TodoItem.css";

export default function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <div className={`todo-item ${todo.completed ? "done" : ""}`}>
      <div className="todo-left">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        <span>{todo.text}</span>
      </div>

      <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>✕</button>
    </div>
  );
}
