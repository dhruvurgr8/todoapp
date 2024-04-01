import { createSlice } from "@reduxjs/toolkit";

// Initialize id for assigning unique ids to todo items
let id = 1;

// Create a slice for managing todos using Redux Toolkit
const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    // Action for adding a todo
    addTodo: (state, action) => {
      state.push({
        id: id++,
        text: action.payload,
        completed: false, // Initial completion status set to false
      });
    },
    // Action for setting todos
    setTodos: (state, action) => {
      return action.payload;
    },
    // Action for removing a todo
    removeTodo: (state, action) => {
      // Filter out the todo with the provided id from the state array
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

// Export action creators
export const { addTodo, removeTodo, setTodos } = todoSlice.actions;

// Export reducer
export default todoSlice.reducer;
