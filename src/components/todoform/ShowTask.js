// ShowTask.js
import React from "react";
import "./showtask.css";
import { useDispatch } from "react-redux";
import { removeTodo } from "../redux/reducer";

const ShowTask = ({ todo }) => {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(removeTodo(id)); //dispatching delete action to delete the task
  };
  return (
    <div className="task-container">
      <table>
        <thead>
          <tr>
            <th className="id">Id</th>
            <th>Task</th>
            <th className="action">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr key={todo.id}>
            <td className="id-column">{todo.id}</td>
            <td>{todo.text}</td>
            <td className="action-column">
              <button
                onClick={() => {
                  handleDelete(todo.id);
                }}
                className="delete-button"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ShowTask;
