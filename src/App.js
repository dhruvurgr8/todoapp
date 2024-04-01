import React from "react";
import TodoForm from "./components/todoform/TodoForm";
import store from "./components/redux/store";
import { Provider } from "react-redux";
import ShowTask from "./components/todoform/ShowTask";
const App = () => {
  return (
    <>
      <Provider store={store}>
        <TodoForm />
      </Provider>
    </>
  );
};

export default App;
