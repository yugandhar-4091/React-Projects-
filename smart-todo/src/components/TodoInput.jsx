import { useState } from "react";
import "./TodoInput.css";

export default function TodoInput({ onAdd }) {
  const [value, setValue] = useState("");

  const submit = () => {
    if (!value.trim()) return;
    onAdd(value);
    setValue("");
  };

  return (
    <div className="todo-input-bar">
      <input
        placeholder="What needs to be done?"
        value={value}
        onChange={e => setValue(e.target.value)}
        onKeyDown={e => e.key === "Enter" && submit()}
      />
      <button onClick={submit}>Add</button>
    </div>
  );
}
