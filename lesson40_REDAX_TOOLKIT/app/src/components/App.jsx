import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTodos } from '../store/slices/TodoSlice'
import ToDoForm from "../toDoForm/ToDoFrom";
import ToDoList from "./toDoLIst/ToDoList";

function App() {
    const dispath = useDispatch();

	useEffect(() => {
		dispath(fetchTodos());
	}, [dispath]);
    return (
      <>
        <ToDoForm />
		<ToDoList />
      </>
    );
}

export default App;
