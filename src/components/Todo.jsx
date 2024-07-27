import trash from "../assets/trash.svg";
import clsx from "clsx";

export default function Todo({ id, text, checked, setTasks }) {
	function handleDelete() {
		setTasks((prevTasks) => {
			return prevTasks.filter((el) => {
				return el.id !== id;
			});
		});
	}

	function handleToggle() {
		setTasks((prevTasks) =>
			prevTasks.map((el) =>
				el.id === id ? { ...el, checked: !checked } : el
			)
		);
	}

	return (
		<div
			className={clsx(
				"single-todo-wrapper",
				checked ? "todo-checked" : "todo-unchecked"
			)}
		>
			<div className="text" onClick={handleToggle}>
				<span>{text}</span>
			</div>
			<button onClick={handleDelete}>
				<img src={trash} alt="delete task" />
			</button>
		</div>
	);
}
