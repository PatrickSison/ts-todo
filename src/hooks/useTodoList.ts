import { useReducer } from "react";

type TodoItemType = {
  complete: boolean;
  label: string;
};

interface TodoState {
  todoItems: TodoItemType[];
}

type TodoAction =
  | { type: "CHANGE_LABEL"; value: string; index: number }
  | { type: "TOGGLE_COMPLETE"; index: number }
  | { type: "REMOVE_ITEM"; index: number }
  | { type: "ADD_ITEM" };

const todoReducer: React.Reducer<TodoState, TodoAction> = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "CHANGE_LABEL": {
      const todoItems = [...state.todoItems];
      todoItems[action.index].label = action.value;
      return { ...state, todoItems };
    }
    case "TOGGLE_COMPLETE": {
      const todoItems = [...state.todoItems];
      const todoItem = todoItems[action.index];
      todoItems[action.index] = { ...todoItem, complete: !todoItem.complete };
      return { ...state, todoItems };
    }

    case "REMOVE_ITEM": {
      const todoItems = [...state.todoItems];
      todoItems.splice(action.index, 1);
      return { ...state, todoItems };
    }

    case "ADD_ITEM": {
      return {
        ...state,
        todoItems: [...state.todoItems, { complete: false, label: "" }],
      };
    }
  }
};

const initialState = {
  todoItems: [],
};

export default function useTodoList() {
  return useReducer(todoReducer, initialState);
}
