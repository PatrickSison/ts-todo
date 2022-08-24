import React from "react";
import useTodoList from "../hooks/useTodoList";
import TodoItem from "./TodoItem";
import "./TodoList.css";

export default function TodoList() {
  const [state, dispatch] = useTodoList();

  return (
    <div>
      {state.todoItems.map((item, index) => {
        return (
          <div key={`item_${index}`} className="todo-list-item">
            <TodoItem
              id={`item_${index}`}
              complete={item.complete}
              onChange={(value) =>
                dispatch({ type: "CHANGE_LABEL", value, index })
              }
              handleMarkComplete={() =>
                dispatch({ type: "TOGGLE_COMPLETE", index })
              }
              label={item.label}
            />
            <button
              className="remove-button"
              onClick={() => dispatch({ type: "REMOVE_ITEM", index })}
            >
              Remove Item
            </button>
          </div>
        );
      })}
      <button onClick={() => dispatch({ type: "ADD_ITEM" })}>Add Todo</button>
    </div>
  );
}
