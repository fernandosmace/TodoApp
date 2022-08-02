import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TodoContext from "../contexts/TodoContext";
import Navbar from "./Navbar";
import TodoList from "./TodoList";

const App = () => {
  return (
    <TodoContext>
      <Router>
        <Navbar></Navbar>
        <br />
        <div className="uk-container">
          <Routes>
            <Route path="/create"></Route>
            <Route path="/" element={<TodoList />} />
          </Routes>
        </div>
      </Router>
    </TodoContext>
  );
};

export default App;
