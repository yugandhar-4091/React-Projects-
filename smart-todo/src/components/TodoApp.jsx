import { useState, useEffect } from "react";
import TodoInput from "./TodoInput.jsx";
import TodoList from "./TodoList.jsx";
import TodoFilters from "./TodoFilters.jsx";

export default function TodoApp(){
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [dark,setDark] = useState(false);


  useEffect(()=>{
    const saved = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(saved);
  }, []);

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text)=>{
    setTodos(prev => [...prev, { id: Date.now(), text, completed: false }]);
  };

  const toggleTodo = (id)=>{
    setTodos(prev => prev.map(t =>
      t.id === id ? { ...t, completed: !t.completed } : t
    ));
  };

  const deleteTodo = (id)=>{
    setTodos(prev => prev.filter(t => t.id !== id));
  };

  const clearCompleted = ()=>{
    setTodos(prev => prev.filter(t => !t.completed));
  };

  const filtered = todos.filter(t=>{
    if(filter==="all") return true;
    if(filter==="active") return !t.completed;
    return t.completed;
  });

  const stats = {
    total: todos.length,
    active: todos.filter(t=>!t.completed).length,
    completed: todos.filter(t=>t.completed).length
  };

  return(
    <div className="app-wrapper">
      <div className="todo-card">
        <h1 className="title">Tasks</h1>
        <p className="subtitle">
          {stats.active === 0 && stats.total > 0
            ? "All done! 🎉"
            : `${stats.active} tasks remaining`}
        </p>

        <TodoInput onAdd={addTodo}/>
        <TodoList todos={filtered} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
        {stats.total > 0 &&
          <TodoFilters setFilter={setFilter} stats={stats} clearCompleted={clearCompleted}/>
        }
      </div>
    </div>
  );
}
