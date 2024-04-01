import React, { useState, useEffect } from "react";
import "./todoform.css";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, setTodos } from "../redux/reducer";
import ShowTask from "./ShowTask";

const TodoForm = () => {
  const [inputValue, setInputValue] = useState(""); // useState to handle Input value entered by user
  const dispatch = useDispatch(); // dispatch is used to trigger actions
  const todos = useSelector((state) => state.todos); // Access todos from the Redux store.

  // Retrieve tasks from local storage when component mounts
  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      dispatch(setTodos(JSON.parse(savedTodos)));
    }
  }, [dispatch]);

  // Function to handle change event when user enters something
  const handleChange = (e) => {
    setInputValue(e.target.value); // Setting the value entered by user
  };

  // Function to handle task on click of Add Task button
  const handleClick = () => {
    dispatch(addTodo(inputValue));
    setInputValue(""); // Clearing input after adding task
  };

  // Save tasks to local storage whenever there's a change in the tasks
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <div className="todo-container">
        <div className="task-heading">
          <h1>Add Task</h1>
        </div>
        <div className="input-group">
          <input
            onChange={handleChange}
            value={inputValue}
            type="text"
            placeholder="Add task here..."
          />
        </div>
        <div className="btn">
          <button onClick={handleClick}>Add Task</button>{" "}
          {/* Button to add task  */}
        </div>
      </div>

      {todos &&
        todos.map((todo) => {
          // Component to show task
          return <ShowTask key={todo.id} todo={todo} />;
        })}
    </>
  );
};

export default TodoForm;
