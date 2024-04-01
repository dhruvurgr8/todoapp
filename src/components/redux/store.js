import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducer";

// Export a Redux store configured with the todoReducer
export default configureStore({
  reducer: {
    todos: todoReducer,
  },
});
