import React from "react";
import "./TodoItem.css";

type TodoItemProps = {
  onChange: (value: string) => void;
  handleMarkComplete: () => void;
  id: string;
  label: string;
  complete: boolean;
};

export default function TodoItem({
  onChange,
  id,
  complete,
  label,
  handleMarkComplete,
}: TodoItemProps): JSX.Element {
  const handleChange = (e: React.FormEvent<HTMLInputElement>) =>
    onChange(e.currentTarget.value);

  return (
    <div id={id} className="todo-item">
      <input
        checked={complete}
        type="checkbox"
        onChange={handleMarkComplete}
        className="todo-item-checkbox"
      />
      <input
        onChange={handleChange}
        value={label}
        className="todo-item-input"
      />
    </div>
  );
}
