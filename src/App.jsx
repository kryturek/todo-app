import { useEffect, useRef, useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import Todos from "./components/Todos";
import Footer from "./components/Footer";

function App() {
	const [input, setInput] = useState("");
	const [tasks, setTasks] = useState([]);
	const endOfTasksRef = useRef(null);

	useEffect(() => {
		const savedTasks = localStorage.getItem("tasks");

		if (savedTasks) {
			setTasks(JSON.parse(savedTasks));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("tasks", JSON.stringify(tasks));
	}, [tasks]);

	useEffect(() => {
		endOfTasksRef.current?.scrollIntoView();
	}, [tasks]);

	return (
		<div className="app-wrapper">
			<Header />
			<AddTodo input={input} setInput={setInput} setTasks={setTasks} />
			<Todos
				tasks={tasks}
				setTasks={setTasks}
				endOfTasksRef={endOfTasksRef}
			/>
			<Footer />
		</div>
	);
}

export default App;
