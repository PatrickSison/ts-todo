import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { TodoList } from "./components";

function App() {
  return (
    <div className="App">
      <h1>Simple Todo App</h1>
      <TodoList />
    </div>
  );
}

export default App;
