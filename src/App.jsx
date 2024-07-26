import "./App.css";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";

function App() {
	return (
		<div className="app-wrapper">
			<Header />
			<AddTodo />
		</div>
	);
}

export default App;
